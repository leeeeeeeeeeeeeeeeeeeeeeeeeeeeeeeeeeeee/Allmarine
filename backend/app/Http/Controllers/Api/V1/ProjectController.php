<?php

namespace App\Http\Controllers\Api\V1;

use App\Domain\Project\Models\Project;
use App\Http\Controllers\Controller;
use App\Http\Resources\Api\V1\ProjectResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index(Request $request)
    {
        $projects = Project::query()
            ->published()
            ->with('images')
            ->orderBy('sort_order')
            ->orderByDesc('id')
            ->get();

        return ProjectResource::collection($projects);
    }

    public function show(string $slug)
    {
        $project = Project::query()
            ->published()
            ->with('images')
            ->where('slug', $slug)
            ->firstOrFail();

        return (new ProjectResource($project))->additional(['details' => true]);
    }

    public function categories(): JsonResponse
    {
        $categories = Project::query()
            ->published()
            ->orderBy('category')
            ->distinct()
            ->pluck('category')
            ->values();

        return response()->json([
            'data' => $categories,
        ]);
    }
}
