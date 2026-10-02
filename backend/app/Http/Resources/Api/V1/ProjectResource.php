<?php

namespace App\Http\Resources\Api\V1;

use App\Domain\Project\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin Project */
class ProjectResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        $details = $request->routeIs('api.v1.projects.show');

        return [
            'id' => $this->slug,
            'slug' => $this->slug,
            'title' => $this->title,
            'category' => $this->category,
            'client' => $this->client,
            'status' => $this->status,
            'contractValue' => $this->contract_value,
            'duration' => $this->duration,
            'role' => $this->role,
            'location' => $this->location,
            'description' => $this->description,
            'fullDescription' => $details ? ($this->full_description ?? []) : [],
            'image' => $this->cover_url,
            'gallery' => $details ? $this->gallery_urls : [],
        ];
    }
}
