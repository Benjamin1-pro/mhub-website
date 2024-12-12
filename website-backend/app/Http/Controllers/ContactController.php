<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactController extends Controller
{
    function storeContact(Request $request) {
        $contact = new Contact();
        $contact->name = $request->name;
        $contact->email = $request->email;
        $contact->phone = $request->phone;
        $contact->subject = $request->subject;
        $contact->message = $request->message;
        $contact->save();

        $result = [
            'data' => $contact,
            'success' => true,
            'status' => 200
        ];

        return response()->json($result);
    }

    function getAllContactsData(Request $request) {
        $contacts = Contact::paginate(10);

        $result = [
            'data' => $contacts,
            'success' => true,
            'status' => 200
        ];

        return response()->json($result);
    }
}
