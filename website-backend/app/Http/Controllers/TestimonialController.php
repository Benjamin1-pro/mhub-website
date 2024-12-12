<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Testimonial;

class TestimonialController extends Controller
{
    function getAllTestimonialData(Request $request) {
        $testimonial = Testimonial::all();

        $result = [
            'data' => $testimonial,
            'success' => true,
            'status' => 200
        ];

        return response()->json($result);
    }

    function storeTestimonial(Request $request) {
        $testimonial = new Testimonial();
        $testimonial->name = $request->name;
        $testimonial->testimonial = $request->testimonial;
        $testimonial->save();

        $result = [
            'data' => $testimonial,
            'success' => true,
            'status' => 200
        ];

        return response()->json($result);
    }

    function updateTestimonial(Request $request, $id) {
        $team = Testimonial::find($id);
        $testimonial->name = $request->name;
        $testimonial->testimonial = $request->testimonial;
        $team->save();

        $result = [
            'data' => $team,
            'success' => true,
            'status' => 200
        ];

        return response()->json($result);
    }
}
