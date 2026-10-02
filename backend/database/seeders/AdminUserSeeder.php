<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    public function run(): void
    {
        User::query()->updateOrCreate(
            ['email' => 'admin@allmarineuae.com'],
            [
                'name' => 'All Marine Admin',
                'password' => Hash::make('password'),
            ],
        );
    }
}
