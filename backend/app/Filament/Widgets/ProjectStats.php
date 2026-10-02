<?php

namespace App\Filament\Widgets;

use App\Domain\Project\Models\Project;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class ProjectStats extends BaseWidget
{
    protected static ?int $sort = 1;

    protected function getStats(): array
    {
        return [
            Stat::make('Published projects', Project::query()->published()->count())
                ->description('Visible on the public API')
                ->color('success'),
            Stat::make('Draft projects', Project::query()->where('is_published', false)->count())
                ->description('Hidden from the public API')
                ->color('warning'),
            Stat::make('Total projects', Project::query()->count())
                ->color('primary'),
        ];
    }
}
