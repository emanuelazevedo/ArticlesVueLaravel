<?php

use Illuminate\Http\Request;

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

Route::post('/auth/register', 'AuthenticationController@register');
Route::post('/auth/login', 'AuthenticationController@login');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('article', 'ArticleController');
Route::resource('comment', 'CommentController');

Route::middleware('auth:api')->group(function() {
    Route::get('/auth/logout', 'AuthenticationController@logout');
});
