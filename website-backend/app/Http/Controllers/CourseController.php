<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;

class CourseController extends Controller
{
    function getAllCoursesData(Request $request) {
        $course = Course::paginate(10);

        $result = [
            'data' => $course,
            'success' => true,
            'status' => 200
        ];

        return response()->json($result);
    }

    function storeCourse(Request $request) {
        $course = new Course();
        $course->image = $request->image;
        $course->title = $request->title;
        $course->description = $request->description;
        $course->duration = $request->duration;
        $course->save();

        $result = [
            'data' => $course,
            'success' => true,
            'status' => 200
        ];

        return response()->json($result);
    }

    function editCourse(Request $request, $id) {
        $course = Course::find($id);
        $course->image = $request->image;
        $course->title = $request->title;
        $course->description = $request->description;
        $course->duration = $request->duration;
        $course->save();

        $result = [
            'data' => $course,
            'success' => true,
            'status' => 200
        ];

        return response()->json($result);
    }
}
