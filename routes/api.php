<?php

use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\TariffController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('orders/store', [OrderController::class, 'store']);
Route::get('orders', [OrderController::class, 'index']);
Route::get('tariffs', [TariffController::class, 'index']);
