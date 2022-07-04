<?php

namespace App\Http\Controllers\Auth;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Hash;
use Laravel\Passport\TokenRepository;
use Laravel\Passport\RefreshTokenRepository;
use Illuminate\Support\Facades\Mail;
use App\Mail\sendEmail;
use Carbon\Carbon;
use Validator;
use Exception;
use Log;
use Auth;
class AuthController extends Controller
{
    /**
     * Attemp to Register user.
     *
     * @return json
    */
    public function registerTeacher(Request $request){

        $input = $request->only(['user_id', 'email', 'password']);

        $validate_data = [
            'user_id' => 'required|string|min:3',
            'email' => 'required|email',
            'password' => 'required|min:6|max:20',
        ];

        $validator = Validator::make($input, $validate_data);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Please see errors parameter for all errors.',
                'errors' => $validator->errors()
            ]);
        }

        $otp = rand(1000,9999);
        Log::info("otp = ".$otp);

        $mail_details = [
            'subject' => 'Lexismat - OTP Verification',
            'body' => 'Your OTP is : '. $otp
        ];

        \Mail::to($input['email'])->send(new sendEmail($mail_details));

        $data = [
            'user_id' => $input['user_id'],
            'email' => $input['email'],
            'password' => Hash::make($input['password']),
            'otp' => $otp,
            'status' => 200,
            'message' => "OTP sent successfully"
        ];

        return response()->json($data);
    }

    /**
     * Verify OTP and Register user.
     *
     * @return json
    */
    public function verifyOTPTeacher(Request $request){

        app()[PermissionRegistrar::class]->forgetCachedPermissions();
        $input = $request->only(['user_id', 'email', 'password', 'otp', 'confirm_otp']);

        if($input['otp'] == $input['confirm_otp']){
            $teacher_role = Role::where(['name'=>'teacher'])->first();

            $user = User::create([
                'user_id' => $input['user_id'],
                'email' => $input['email'],
                'password' => Hash::make($input['password']),
            ]);
            $user->attachRole($teacher_role);
            $accessToken = $user->createToken('authToken')->accessToken;
            return response()->json([
                'success' => true,
                'message' => 'User Created Successfully',
                'access_token' => $accessToken
            ], 201);

        }else{
            return response()->json([
                'success' => false,
                'message' => 'The OTP entered is incorrect.'
            ], 200);
        }
    }

    /**
     * Teacher List.
     *
     * @return json
    */
    public function teacherList(){

        $teachers = User::get();

        return response()->json($teachers);
    }

    /**
     * Login user.
     *
     * @return json
    */
    public function loginTeacher(Request $request){

        $input = $request->only(['user_id', 'password']);

        $validate_data = [
            'user_id' => 'required|string|min:3',
            'password' => 'required|min:6',
        ];

        $validator = Validator::make($input, $validate_data);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Please see errors parameter for all errors.',
                'errors' => $validator->errors()
            ]);
        }

        // authentication attempt
        $user = User::where('user_id',$request->user_id)->first();
        if (Auth::guard('teacher')->attempt(['user_id' => $user->user_id, 'password' => $request->password])) {

            $token = auth()->guard('teacher')->user()->createToken('passport_token')->accessToken;

            return response()->json([
                'success' => true,
                'message' => 'Teacher login succesfully, Use token to authenticate.',
                'token' => $token
            ], 200);

        } else {
            return response()->json([
                'success' => false,
                'message' => 'User authentication failed.',
            ], 401);
        }
    }

    /**
     * Logout user.
     *
     * @return json
     */
    public function logoutTeacher(){

        $access_token = auth()->user()->token();

        // logout from only current device
        $tokenRepository = app(TokenRepository::class);
        $tokenRepository->revokeAccessToken($access_token->id);

        // use this method to logout from all devices
        // $refreshTokenRepository = app(RefreshTokenRepository::class);
        // $refreshTokenRepository->revokeRefreshTokensByAccessTokenId($$access_token->id);

        return response()->json([
            'success' => true,
            'message' => 'User logout successfully.'
        ], 200);
    }
}
