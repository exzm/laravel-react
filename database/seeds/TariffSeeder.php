<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Arr;

class TariffSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 10; $i++) {
            DB::table('tariffs')->insert(
                [
                    'name'          => 'Tariff ' . $i,
                    'price'         => mt_rand(10, 1000),
                    'delivery_days' => json_encode(Arr::random(range(0, 6), rand(2, 7)))
                ]
            );
        }
    }
}
