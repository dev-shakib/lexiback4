<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Teacher\ActivityController;
use App\Http\Controllers\Teacher\WordController;
use App\Http\Controllers\Teacher\DashboardController;
use App\Http\Controllers\Teacher\UserController;
use App\Http\Controllers\Teacher\ConfigController;
use App\Http\Controllers\Student\StudentAuthController;
use App\Http\Controllers\Student\StudentController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/* Teacher Panel*/

Route::prefix('teacher')->group(function () {
    Route::group(['middleware' => ['auth:teacher-api','role:teacher']], function () {
        // put all api protected routes here
        
        Route::resource('user',UserController::class);

        Route::resource('word',WordController::class);
        Route::post('word/create',[WordController::class,'store']);
        Route::post('word/update/{id}',[WordController::class,'update']);
        Route::get('default-config',[ConfigController::class,'index']);
        Route::get('config-list',[ConfigController::class,'ConfigList']);
        Route::post('update-or-create-config',[ConfigController::class,'updateOrCreateConfig']);
        Route::get('config-delete/{id}',[ConfigController::class,'destroy']);
        Route::get('activity/{activity_number}',[ActivityController::class,'SingleActivity']);

        Route::post('logout', [AuthController::class, 'logoutTeacher']);
    });
    Route::post('register', [AuthController::class, 'registerTeacher']);
    Route::post('verify-otp', [AuthController::class, 'verifyOTPTeacher']);
    Route::post('login', [AuthController::class, 'loginTeacher']);
    Route::get('list', [AuthController::class, 'teacherList']);
});
Route::prefix('student')->group(function(){
    Route::group(['middleware' => ['auth:student-api','role:student']], function () {
        Route::get('get-profile-info',[StudentController::class,'profile']);
        Route::get('activity/{activity_number}',[StudentController::class,'activity']);
    });
    Route::get('get-all-config',[StudentAuthController::class,'getAllConfig']);
    Route::post('register',[StudentAuthController::class,'register']);
    Route::post('login',[StudentAuthController::class,'login']);
});
/* Teacher Panel*/

