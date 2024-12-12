<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Event;

class EventController extends Controller
{
    function getAllEventsData(Request $request) {
        $events = Event::paginate(10);

        $result = [
            'data' => $events,
            'success' => true,
            'status' => 200
        ];

        return response()->json($result);
    }

    function storeEvent(Request $request) {
        $event = new Event();
        $event->image = $request->image;
        $event->title = $request->title;
        $event->description = $request->description;
        $event->location = $request->location;
        $event->date_start = $request->date_start;
        $event->date_end = $request->date_end;
        $event->save();

        $result = [
            'data' => $event,
            'success' => true,
            'status' => 200
        ];

        return response()->json($result);
    }

    function editEvent(Request $request, $id) {
        $event = Event::find($id);
        $event->image = $request->image;
        $event->title = $request->title;
        $event->description = $request->description;
        $event->location = $request->location;
        $event->date_start = $request->date_start;
        $event->date_end = $request->date_end;
        $event->save();

        $result = [
            'data' => $event,
            'success' => true,
            'status' => 200
        ];

        return response()->json($result);
    }

    function getSingleEventData(Request $request, $id) {
        $events = Event::find($id);

        $result = [
            'data' => $events,
            'success' => true,
            'status' => 200
        ];

        return response()->json($result);
    }
}
