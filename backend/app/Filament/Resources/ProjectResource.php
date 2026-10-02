<?php

namespace App\Filament\Resources;

use App\Domain\Project\Models\Project;
use App\Domain\Project\Support\ProjectCategories;
use App\Filament\Resources\ProjectResource\Pages;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Forms\Get;
use Filament\Forms\Set;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Support\Str;

class ProjectResource extends Resource
{
    protected static ?string $model = Project::class;

    protected static ?string $navigationIcon = 'heroicon-o-building-office-2';

    protected static ?string $navigationGroup = 'Portfolio';

    protected static ?int $navigationSort = 1;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Listing')
                    ->schema([
                        Forms\Components\TextInput::make('title')
                            ->required()
                            ->maxLength(255)
                            ->live(onBlur: true)
                            ->afterStateUpdated(function (Get $get, Set $set, ?string $state): void {
                                if (filled($get('slug'))) {
                                    return;
                                }

                                $set('slug', Str::slug((string) $state));
                            }),
                        Forms\Components\TextInput::make('slug')
                            ->required()
                            ->maxLength(255)
                            ->unique(ignoreRecord: true),
                        Forms\Components\TextInput::make('category')
                            ->datalist(array_values(ProjectCategories::OPTIONS))
                            ->required()
                            ->maxLength(255),
                        Forms\Components\TextInput::make('location')
                            ->required()
                            ->maxLength(255),
                        Forms\Components\Textarea::make('description')
                            ->required()
                            ->rows(4)
                            ->columnSpanFull(),
                    ])
                    ->columns(2),
                Forms\Components\Section::make('Specifications')
                    ->schema([
                        Forms\Components\TextInput::make('client')->maxLength(255),
                        Forms\Components\TextInput::make('status')->maxLength(255),
                        Forms\Components\TextInput::make('contract_value')->maxLength(255),
                        Forms\Components\TextInput::make('duration')->maxLength(255),
                        Forms\Components\TextInput::make('role')->maxLength(255),
                        Forms\Components\TextInput::make('sort_order')
                            ->numeric()
                            ->default(0)
                            ->required(),
                        Forms\Components\Toggle::make('is_published')
                            ->label('Published')
                            ->default(true),
                    ])
                    ->columns(2),
                Forms\Components\Section::make('Story')
                    ->schema([
                        Forms\Components\Repeater::make('full_description')
                            ->label('Full description paragraphs')
                            ->schema([
                                Forms\Components\Textarea::make('text')
                                    ->required()
                                    ->rows(3)
                                    ->columnSpanFull(),
                            ])
                            ->afterStateHydrated(function (Forms\Components\Repeater $component, mixed $state): void {
                                if (! is_array($state)) {
                                    return;
                                }

                                $component->state(
                                    collect($state)
                                        ->map(fn ($paragraph) => is_string($paragraph)
                                            ? ['text' => $paragraph]
                                            : $paragraph)
                                        ->all()
                                );
                            })
                            ->dehydrateStateUsing(fn (?array $state): array => collect($state ?? [])
                                ->pluck('text')
                                ->filter()
                                ->values()
                                ->all())
                            ->default([])
                            ->columnSpanFull(),
                    ]),
                Forms\Components\Section::make('Media')
                    ->schema([
                        Forms\Components\FileUpload::make('cover_path')
                            ->label('Cover image')
                            ->image()
                            ->disk('public')
                            ->directory('projects/covers')
                            ->visibility('public')
                            ->required()
                            ->columnSpanFull(),
                        Forms\Components\Repeater::make('images')
                            ->relationship()
                            ->schema([
                                Forms\Components\FileUpload::make('path')
                                    ->image()
                                    ->disk('public')
                                    ->directory('projects/gallery')
                                    ->visibility('public')
                                    ->required()
                                    ->columnSpanFull(),
                            ])
                            ->orderColumn('sort_order')
                            ->reorderable()
                            ->collapsible()
                            ->defaultItems(0)
                            ->columnSpanFull(),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('cover_path')
                    ->disk('public')
                    ->label('Cover'),
                Tables\Columns\TextColumn::make('title')
                    ->searchable()
                    ->sortable()
                    ->wrap(),
                Tables\Columns\TextColumn::make('category')
                    ->badge()
                    ->sortable(),
                Tables\Columns\TextColumn::make('status')
                    ->sortable(),
                Tables\Columns\IconColumn::make('is_published')
                    ->boolean()
                    ->label('Published'),
                Tables\Columns\TextColumn::make('sort_order')
                    ->sortable(),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->defaultSort('sort_order')
            ->filters([
                Tables\Filters\TernaryFilter::make('is_published')->label('Published'),
                Tables\Filters\SelectFilter::make('category')
                    ->options(ProjectCategories::OPTIONS),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProjects::route('/'),
            'create' => Pages\CreateProject::route('/create'),
            'edit' => Pages\EditProject::route('/{record}/edit'),
        ];
    }
}
