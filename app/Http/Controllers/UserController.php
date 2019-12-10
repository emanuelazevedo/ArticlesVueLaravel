<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;

use App\User;

class UserController extends Controller
{
    //

    public function showUserData() {
        $user = Auth::user();
        // $user = User::where('id', $userAuth->id)->first();
        $user->articles;
        return $user;
    }
}
