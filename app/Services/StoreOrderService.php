<?php

namespace App\Services;

use App\Http\Requests\StoreOrderRequest;
use App\Models\Client;
use App\Models\Order;
use App\Models\Tariff;

final class StoreOrderService
{

    /**
     * @param StoreOrderRequest $request
     *
     * @return Order
     */
    public function save(StoreOrderRequest $request): Order
    {
        $client = $this->getClientByPhone($request->get('phone'), $request->get('name'));
        $tariff = $this->getTariffById($request->get('tariff'));

        $order = new Order();
        $order->client()->associate($client);
        $order->tariff()->associate($tariff);
        $order->address = $request->get('address');
        $order->delivery_time = date('c', $request->get('delivery_time'));
        $order->save();

        return $order;
    }

    /**
     * @param string $phone
     * @param string $name
     *
     * @return Client
     */
    private function getClientByPhone(string $phone, string $name): Client
    {
        return Client::firstOrCreate(['phone' => $phone], ['name' => $name]);
    }

    /**
     * @param int $id
     *
     * @return Tariff
     */
    private function getTariffById(int $id): Tariff
    {
        return Tariff::findOrFail($id);
    }
}
