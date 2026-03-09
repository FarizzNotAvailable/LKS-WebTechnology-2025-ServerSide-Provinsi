<?php

namespace App\Http\Controllers;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    function signin(Request $request){
        $dataClient = $request->validate([
            'username'=>'required|min:4|max:60',
            'password'=>'required|min:5|max:16'
        ]);

        $user = User::where('username', $dataClient['username'])->first();
        
        if(!$user || !Hash::check($dataClient['password'], $user->password)){
            return response()->json([
                'status'=>'invalid',
                'message'=>'wrong username or password'
            ], 401);
        }
        $data['last_login_at'] = Carbon::now();
        
        $user->update($data);
        
        $token = $user->createToken('auth')->plainTextToken;
        
        return response()->json([
            'status'=>'success',
            'token'=> $token
        ],201);
    }   
    function signup(Request $request){
        $dataClient = $request->validate([
            'username'=>'required|unique:users,username|min:4|max:60',
            'password'=>'required|min:5|max:16'
        ]);
        
        $dataClient['password']= Hash::make($dataClient['password']);
        
        $user = User::create($dataClient);
        $token = $user->createToken('auth')->plainTextToken;
        
        $data['last_login_at'] = Carbon::now();
        
        $user->update($data);
        
        return response()->json([
            'status'=>'success',
            'token'=> $token
        ],201);
    }
    function signout(Request $request){
        $request->User()->currentAccessToken()->delete();

        return response()->json([
            'message'=>'success'
        ]);
    }
}
