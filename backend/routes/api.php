<?php

use App\Http\Controllers\Api\ApplicationController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\ContentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Healthcheck
Route::get('/health', function () {
    return response()->json([
        'status' => 'ok',
        'framework' => 'Laravel ' . app()->version(),
        'timestamp' => now()->toISOString(),
    ]);
});

// Applications routes
Route::prefix('applications')->group(function () {
    Route::get('/', [ApplicationController::class, 'index']);
    Route::post('/', [ApplicationController::class, 'store']);
    Route::get('/{id}', [ApplicationController::class, 'show']);
});

// Contact routes
Route::prefix('contact')->group(function () {
    Route::get('/', [ContactController::class, 'index']);
    Route::post('/', [ContactController::class, 'store']);
});

// Content routes
Route::prefix('content')->group(function () {
    Route::get('/programs', [ContentController::class, 'programs']);
    Route::get('/services', [ContentController::class, 'services']);
    Route::get('/projects', [ContentController::class, 'projects']);
});
