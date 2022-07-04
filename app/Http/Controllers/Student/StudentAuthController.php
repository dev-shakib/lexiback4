<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Laravel\Passport\TokenRepository;
use Laravel\Passport\RefreshTokenRepository;
use Illuminate\Support\Facades\Hash;
use Validator;
use Exception;
use App\Models\Student;
use App\Models\Role;
use App\Models\Permission;
use App\Models\Configs;
use Auth;
class StudentAuthController extends Controller
{
    public function getAllConfig()
    {
        return response()->json([
            'success'=>true,
            'data'=>Configs::get()
        ]);
    }
    public function register(Request $request)
    {

        $input = $request->only(['user_id', 'password','yob','gender','config']);

        $validate_data = [
            'user_id' => 'required|string|min:3',
            'password' => 'required|min:6|max:20',
            'yob'=> 'required',
            'gender' => 'required',
            'config' => 'required'
        ];

        $validator = Validator::make($input, $validate_data);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Please see errors parameter for all errors.',
                'errors' => $validator->errors()
            ]);
        }

        $student_role = Role::where(['name'=>'student'])->first();
        // $student_role->givePermissionTo('read activity');
        // $student_role->givePermissionTo('read word');
        // dd($student_role);
        $student = Student::create([
            'user_id' => $input['user_id'],
            'password' => Hash::make($input['password']),
            'yob' => $input['yob'],
            'gender' => $input['gender'],
            'config_id' => $input['config'],
        ]);
        $student->attachRole($student_role);
        $accessToken = $student->createToken('authToken')->accessToken;
            return response()->json([
                'success' => true,
                'message' => 'Student Created Successfully',
                'access_token' => $accessToken
            ], 201);
    }
    public function login(Request $request){

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
        if (auth()->guard('student')->attempt($input)) {

            $token = auth()->guard('student')->user()->createToken('passport_token')->accessToken;

            return response()->json([
                'success' => true,
                'message' => 'Student login succesfully, Use token to authenticate.',
                'token' => $token
            ], 200);

        } else {
            return response()->json([
                'success' => false,
                'message' => 'Student authentication failed.',
            ], 401);
        }
    }
}
