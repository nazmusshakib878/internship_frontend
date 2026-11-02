<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Application;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ApplicationController extends Controller
{
    /**
     * Store a newly created application.
     */
    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'fullName' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'reason' => 'required|string',
            'programLevel' => 'nullable|string|max:255',
        ], [
            'fullName.required' => 'Full name is required.',
            'email.required' => 'A valid email address is required.',
            'email.email' => 'A valid email address is required.',
            'reason.required' => 'Please share your reason or goals for joining.',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()->first(),
                'errors' => $validator->errors(),
            ], 400);
        }

        $validated = $validator->validated();

        $application = Application::create([
            'full_name' => $validated['fullName'],
            'email' => strtolower($validated['email']),
            'reason' => $validated['reason'],
            'program_level' => $validated['programLevel'] ?? 'Web Development Internship',
            'status' => 'pending',
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Application submitted successfully! Our team will contact you soon.',
            'application' => $application->toArray(),
        ], 201);
    }

    /**
     * Display a listing of applications.
     */
    public function index(): JsonResponse
    {
        $applications = Application::latest()->get();

        return response()->json([
            'success' => true,
            'count' => $applications->count(),
            'applications' => $applications->map(fn($app) => $app->toArray()),
        ]);
    }

    /**
     * Display the specified application.
     */
    public function show(string $id): JsonResponse
    {
        $application = Application::find($id);

        if (!$application) {
            return response()->json([
                'success' => false,
                'message' => 'Application not found',
            ], 404);
        }

        return response()->json([
            'success' => true,
            'application' => $application->toArray(),
        ]);
    }
}
