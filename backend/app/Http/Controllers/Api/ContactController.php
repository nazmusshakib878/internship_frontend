<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    /**
     * Store a newly created contact message.
     */
    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string',
        ], [
            'name.required' => 'Name is required.',
            'email.required' => 'A valid email address is required.',
            'email.email' => 'A valid email address is required.',
            'message.required' => 'Message content is required.',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()->first(),
                'errors' => $validator->errors(),
            ], 400);
        }

        $validated = $validator->validated();

        $contact = Contact::create([
            'name' => $validated['name'],
            'email' => strtolower($validated['email']),
            'message' => $validated['message'],
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Thank you for reaching out! We have received your message.',
            'contact' => $contact->toArray(),
        ], 201);
    }

    /**
     * Display a listing of messages.
     */
    public function index(): JsonResponse
    {
        $contacts = Contact::latest()->get();

        return response()->json([
            'success' => true,
            'count' => $contacts->count(),
            'contacts' => $contacts->map(fn($c) => $c->toArray()),
        ]);
    }
}
