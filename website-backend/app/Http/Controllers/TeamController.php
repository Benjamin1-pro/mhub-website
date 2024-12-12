<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Team;

class TeamController extends Controller
{
    function getAllTeamData(Request $request) {
        $team = Team::all();

        $result = [
            'data' => $team,
            'success' => true,
            'status' => 200
        ];

        return response()->json($result);
    }

    function storeTeam(Request $request) {
        $team = new Team();
        $team->name = $request->name;
        $team->title = $request->title;
        $team->image = $request->image;
        $team->facebook = $request->facebook;
        $team->twitter = $request->twitter;
        $team->linkedin = $request->linkedin;
        $team->save();

        $result = [
            'data' => $team,
            'success' => true,
            'status' => 200
        ];

        return response()->json($result);
    }

    function updateTeam(Request $request, $id) {
        $team = Team::find($id);
        $team->name = $request->name;
        $team->title = $request->title;
        $team->image = $request->image;
        $team->facebook = $request->facebook;
        $team->twitter = $request->twitter;
        $team->linkedin = $request->linkedin;
        $team->save();

        $result = [
            'data' => $team,
            'success' => true,
            'status' => 200
        ];

        return response()->json($result);
    }
}
