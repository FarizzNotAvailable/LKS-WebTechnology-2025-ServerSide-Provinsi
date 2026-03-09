<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('/v1')->group(function(){
    Route::post('/auth/signin', [AuthController::class, 'signin']);
    Route::post('/auth/signup', [AuthController::class, 'signup']);
    Route::middleware('auth:sanctum')->group(function(){
        Route::post('/auth/signout', [AuthController::class, 'signout']);
        Route::get('/admins', [UserController::class, 'getAdmin']);
        Route::get('/users', [UserController::class, 'get']);
        Route::post('/users', [UserController::class, 'post']);
        Route::post('/users/{id}', [UserController::class, 'update']);
        Route::delete('/users/{id}', [UserController::class, 'delete']);
    });
});