<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

class UserController extends Controller
{
    //
    public function login(Request $request)
    {
        $validatedData = $request->validate([
          'email' => 'required',
          'password' => 'required',
        ]);
 
        $authenticated = Auth::attempt([
            'email' => request()->email,
            'password' => request()->password
        ]);
 
 		if ($authenticated) {
 			$msg = [
	            'success' => true,
	            'message' => 'Login success!'
	        ];
 		} else {
 			$msg = [
	            'success' => false,
	            'message' => 'Login Failed! Email/password does not match'
	        ];
 		}

        return response()->json($msg);
    }
}
