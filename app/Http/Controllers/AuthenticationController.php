<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Lcobucci\JWT\Parser;
use App\User;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

use Illuminate\Support\Facades\Auth;


class AuthenticationController extends Controller
{
    public function register (Request $request)
    {
        //
        
        $data = $request->only(['name', 'email', 'password']);
        
        
        $request['password']=Hash::make($request['password']);
        $user = User::create($request->toArray());
    
        $token = $user->createToken('Laravel Password Grant Client')->accessToken;
        $response = ['token' => $token];
    
        return response($response, 200);

    }

    public function login (Request $request) {
        $user = User::where('email', $request->email)->first();
        
        if ($user) {
            if (Hash::check($request->password, $user->password)) {
                
                $token = $user->createToken('Laravel Password Grant Client')->accessToken;
                $response = ['token' => $token];
                return response($response, 200);
            } else {
                $response = 'Password mismatch';
                return response($response, 422);
            }
        } else {
            $response = 'User doesn\'t exist';
            return response($response, 422);
        }
    }
    public function logout () {
        
        // $token = $request->user()->token();
        // $token->revoke();
        // $response = 'You have been succesfully logged out!';
        // return response($response, 200);
        $token = Auth::user()->token();
        var_dump($token);
        die();
        $token->revoke();
        return response()->json('Logged out', 200);
    }

    // public function init() {
    //     $user = Auth::user();

    //     return response()->json($user, 200);
    // }

    // public function login(Request $request) {
    //     if(Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
    //         return response()->json(Auth::user(), 200);
    //     } else {
    //         return response()->json(['error' => 'Could not login'], 401);
    //     }
    // }

    // public function register(Request $request) {

    //     $user = User::where('email', $request->email)->first();

    //     if(isset($user->id)) {
    //         return response()->json(['error' => 'Email already in system'], 401);
    //     }

    //     $data = $request->only(['name', 'email', 'password']);
    //     $data['password'] = Hash::make($data['password']);
    //     $user = User::create($data);

    //     Auth::login($user);

    //     return response()->json($user, 200);
    // }

    // public function logout() {
    //     Auth::logout();
    // }
}