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
    public function login(Request $request)
    {
        $http = new \GuzzleHttp\Client;
        try {
            $response = $http->post('articles.demo/oauth/token', [
                'form_params' => [
                    'grant_type' => 'password',
                    'client_id' => 2,
                    'client_secret' => 's9QLqyl6wxjKaurjFKfsDNMmn23HDt7VH1GxF6DI',
                    'email' => $request->email,
                    'password' => $request->password,
                ]
            ]);
            return $response->getBody();
        } catch (\GuzzleHttp\Exception\BadResponseException $e) {
            if ($e->getCode() === 400) {
                return response()->json('Invalid Request. Please enter a username or a password.', $e->getCode());
            } else if ($e->getCode() === 401) {
                return response()->json('Your credentials are incorrect. Please try again', $e->getCode());
            }
            return response()->json('Something went wrong on the server.', $e->getCode());
        }
    }

    public function register (Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);
    
        if ($validator->fails())
        {
            return response(['errors'=>$validator->errors()->all()], 422);
        }
    
        $request['password']=Hash::make($request['password']);
        $user = User::create($request->toArray());
    
        $token = $user->createToken('Laravel Password Grant Client')->accessToken;
        $response = ['token' => $token];
    
        return response($response, 200);
    
    }


    public function logout()
    {
        auth()->user()->tokens->each(function ($token, $key) {
            $token->delete();
        });
        return response()->json('Logged out successfully', 200);
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