<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Arr;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 5; $i++) {
            DB::table('tariffs')->insert(
                [
                    'name'          => Str::random(10),
                    'price'         => mt_rand(100, 20000),
                    'delivery_days' => json_encode(Arr::random(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], 3))
                ]
            );
        }
    }
}
