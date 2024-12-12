<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

class AuthController extends Controller
{
    function authenticate(Request $request) {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials, $request->remember)) {
            $result = [
                'data' => Auth::user(),
                'access_token'=> true,
                'success' => true,
                'status' => 200
            ];
    
            return response()->json($result);
        }

        $result = [
            'success' => false,
            'status' => 500
        ];

        return response()->json($result);
    }

    function logout(Request $request) {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        
        $result = [
            'success' => true,
            'status' => 200
        ];

        return response()->json($result);
    }
}
