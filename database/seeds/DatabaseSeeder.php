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
        for ($i = 0; $i < 10; $i++) {
            DB::table('tariffs')->insert(
                [
                    'name'          => Str::random(10),
                    'price'         => mt_rand(100, 10000),
                    'delivery_days' => json_encode(Arr::random(range(0, 6), rand(2, 7)))
                ]
            );
        }
    }
}
