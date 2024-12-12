<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Slide;

class SlideController extends Controller
{
    function getAllSlidesData(Request $request) {
        $slides = Slide::all();

        $result = [
            'data' => $slides,
            'success' => true,
            'status' => 200
        ];

        return response()->json($result);
    }

    function storeSlides(Request $request) {
        $slides = new Slide();
        $slides->image = $request->image;
        $slides->title = $request->title;
        $slides->description = $request->description;
        $slides->save();

        $result = [
            'data' => $slides,
            'success' => true,
            'status' => 200
        ];

        return response()->json($result);
    }

    function editSlides(Request $request, $id) {
        $slides = Slide::find($id);
        $slides->image = $request->image;
        $slides->title = $request->title;
        $slides->description = $request->description;
        $slides->save();

        $result = [
            'data' => $slides,
            'success' => true,
            'status' => 200
        ];

        return response()->json($result);
    }
}
