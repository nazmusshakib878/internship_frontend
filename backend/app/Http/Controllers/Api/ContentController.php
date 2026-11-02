<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\File;

class ContentController extends Controller
{
    private function loadData(string $filename): array
    {
        $path = database_path("data/{$filename}");
        if (!File::exists($path)) {
            return [];
        }
        return json_decode(File::get($path), true) ?? [];
    }

    public function programs(): JsonResponse
    {
        $data = $this->loadData('programs.json');
        return response()->json([
            'success' => true,
            'count' => count($data),
            'data' => $data,
        ]);
    }

    public function services(): JsonResponse
    {
        $data = $this->loadData('services.json');
        return response()->json([
            'success' => true,
            'count' => count($data),
            'data' => $data,
        ]);
    }

    public function projects(): JsonResponse
    {
        $data = $this->loadData('projects.json');
        return response()->json([
            'success' => true,
            'count' => count($data),
            'data' => $data,
        ]);
    }
}
