<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $id
 * @property array $delivery_days
 * @property string $name
 * @property float $price
 */
class Tariff extends Model
{
    protected $guarded = [];
    protected $casts = ['delivery_days' => 'array'];
}
