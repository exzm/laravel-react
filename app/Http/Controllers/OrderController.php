<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreOrderRequest;

class OrderController extends Controller
{
    public function store(StoreOrderRequest $request)
    {
        return $request->validate();
    }
}
