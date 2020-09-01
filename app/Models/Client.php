<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $id
 * @property string  $name
 * @property string  $phone
 * */
class Client extends Model
{
    protected $guarded = [];
}
