<?php

namespace App\Repositories;

use App\Models\Tariff;
use Illuminate\Database\Eloquent\Collection;

final class TariffRepository
{
    public function getAll(): Collection
    {
        return Tariff::all();
    }
}
