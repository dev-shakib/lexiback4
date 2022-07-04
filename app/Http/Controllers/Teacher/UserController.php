<?php

namespace App\Http\Controllers\Teacher;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
class UserController extends Controller
{
    public function index()
    {
        if(auth()->check())
        {

            return response()->json([
                'success'=>true,
                'data'=> auth()->user()
            ]);
        }else{
            return response()->json([
                'success'=>false,
                'message'=>"You're not authenticated"
            ]);
        }
    }
}
