<?php

namespace App\Repositories;

use App\Models\Order;
use Illuminate\Database\Eloquent\Collection;

final class OrderRepository
{
    /**
     * @return Collection
     */
    public function getAll(): Collection
    {
        $orders = Order::all();
        return $orders->load(['client', 'tariff']);
    }
}
