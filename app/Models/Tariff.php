<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property array $delivery_days
 */
class Tariff extends Model
{
    protected $guarded = [];
    protected $casts = ['delivery_days' => 'array'];
}
