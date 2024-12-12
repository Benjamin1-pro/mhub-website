<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Partners;

class PartnerController extends Controller
{
    function getAllPartnersData(Request $request) {
        $partners = Partners::all();

        $result = [
            'data' => $partners,
            'success' => true,
            'status' => 200
        ];

        return response()->json($result);
    }
}
