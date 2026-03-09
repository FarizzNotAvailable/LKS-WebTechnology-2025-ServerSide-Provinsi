<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserAdmin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    function getAdmin(Request $request){
        $user = $request->User();
        if(!$user->isAdmin()){
            return response()->json([
                'status'=>'forbiden',
                'message'=>'You are not the administrator'
            ]);
        }

        $admins = UserAdmin::all();
        $admins = $admins->map(function ( $admin) {
            return $admin->User;
        })->toArray();

        return response()->json([
            'totalElement'=>count($admins),
            'content'=>$admins
        ]);
    }
    function get(Request $request){
        $user = $request->User();
        if(!$user->isAdmin()){
            return response()->json([
                'status'=>'forbiden',
                'message'=>'You are not the administrator'
            ]);
        }
        $users = User::all();
        $users = $users->map(function ( $user) {
            return $user;
        })->toArray();

        return response()->json([
            'totalElement'=>count($users),
            'content'=>$users
        ]);
    }
    function post(Request $request){
        $user = $request->User();
        if(!$user->isAdmin()){
            return response()->json([
                'status'=>'forbiden',
                'message'=>'You are not the administrator'
            ]);
        }
        $dataClient = $request->validate([
            'username'=>'required|unique:users,username|min:4|max:60',
            'password'=>'required|min:4|max:20',
        ],[
            'unique'=>[
                'status'=>'invalid',
                'message'=>'Username already exist'
            ]
        ]);
        $dataClient['password'] = Hash::make($dataClient['password']);

        User::create($dataClient);

        return response()->json([
            'status'=>'success',
            'username'=>$dataClient['username']
        ]);
    }
    function update(string $id, Request $request){
        $user = $request->User();
        if(!$user->isAdmin()){
            return response()->json([
                'status'=>'forbiden',
                'message'=>'You are not the administrator'
            ]);
        }
        $dataClient = $request->validate([
            'username'=>'required|unique:users,username|min:4|max:60',
            'password'=>'required|min:4|max:20',
        ],[
            'unique'=>[
                'status'=>'invalid',
                'message'=>'Username already exist'
            ]
        ]);

        $dataClient['password'] = Hash::make($dataClient['password']);

        $user = User::where('id', $id)->first();

        $user->update($dataClient);

        return response()->json([
            'status'=>'success',
            'username'=>$dataClient['username']
        ]);
    }
    function delete(string $id, Request $request){
        $user = $request->User();
        if(!$user->isAdmin()){
            return response()->json([
                'status'=>'forbiden',
                'message'=>'You are not the administrator'
            ]);
        }

        $user = User::where('id', $id)->first();
        if(!$user){
            return response()->json([
            'status'=>'not-found',
            'message'=>"Username not found"
            ], 403);
        }

        $user->delete();

        return response()->json([],204);
    }
}
