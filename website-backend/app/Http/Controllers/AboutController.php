<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\About;

class AboutController extends Controller
{
    function getAllAboutData(Request $request) {
        $about = About::find(1);

        $result = [
            'data' => $about,
            'success' => true,
            'status' => 200
        ];

        return response()->json($result);
    }

    function storeAbout(Request $request) {
        $about = new About();
        $about->denomination = $request->denomination;
        $about->email = $request->email;
        $about->facebook_account = $request->facebook_account;
        $about->linkedin_account = $request->linkedin_account;
        $about->twitter_account = $request->twitter_account;
        $about->description = $request->description;
        $about->image_one = $request->image_one;
        $about->image_two = $request->image_two;
        $about->mission = $request->mission;
        $about->vision = $request->vision;
        $about->objectif = $request->objectif;
        $about->save();

        $result = [
            'data' => $contact,
            'success' => true,
            'status' => 200
        ];

        return response()->json($result);
    }

    function updateAbout(Request $request, $id) {
        $about = About::find($id);
        $about->denomination = $request->denomination;
        $about->email = $request->email;
        $about->facebook_account = $request->facebook_account;
        $about->linkedin_account = $request->linkedin_account;
        $about->twitter_account = $request->twitter_account;
        $about->description = $request->description;
        $about->image_one = $request->image_one;
        $about->image_two = $request->image_two;
        $about->mission = $request->mission;
        $about->vision = $request->vision;
        $about->objectif = $request->objectif;
        $about->addresse = $request->addresse;
        $about->telephone = $request->telephone;
        $about->save();

        $result = [
            'data' => $contact,
            'success' => true,
            'status' => 200
        ];

        return response()->json($result);
    }
}
