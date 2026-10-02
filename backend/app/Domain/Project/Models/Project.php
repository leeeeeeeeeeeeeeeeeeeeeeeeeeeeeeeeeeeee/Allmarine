<?php

namespace App\Domain\Project\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\Storage;

class Project extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'category',
        'client',
        'status',
        'contract_value',
        'duration',
        'role',
        'location',
        'description',
        'full_description',
        'cover_path',
        'sort_order',
        'is_published',
    ];

    protected function casts(): array
    {
        return [
            'full_description' => 'array',
            'is_published' => 'boolean',
            'sort_order' => 'integer',
        ];
    }

    public function images(): HasMany
    {
        return $this->hasMany(ProjectImage::class)->orderBy('sort_order');
    }

    public function scopePublished(Builder $query): Builder
    {
        return $query->where('is_published', true);
    }

    public function getCoverUrlAttribute(): ?string
    {
        return $this->publicUrl($this->cover_path);
    }

    public function getGalleryUrlsAttribute(): array
    {
        return $this->images
            ->map(fn (ProjectImage $image) => $this->publicUrl($image->path))
            ->filter()
            ->values()
            ->all();
    }

    private function publicUrl(?string $path): ?string
    {
        if (! $path) {
            return null;
        }

        return Storage::disk('public')->url($path);
    }
}
