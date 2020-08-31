<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreOrderRequest;
use App\Models\Order;
use App\Repositories\OrderRepository;
use App\Services\StoreOrderService;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     */
    public function index()
    {
        return (new OrderRepository())->getAll();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreOrderRequest $request
     *
     * @return Order
     */
    public function store(StoreOrderRequest $request)
    {
        return (new StoreOrderService())->save($request);
    }

}
