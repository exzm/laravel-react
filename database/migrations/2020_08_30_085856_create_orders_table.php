<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create(
            'orders',
            function (Blueprint $table) {
                $table->id();
                $table->integer('client_id')->comment('Client id');
                $table->integer('tariff_id')->comment('Tariff id');
                $table->string('address')->comment('Client delivery address');
                $table->timestamp('delivery_time')->comment('Client delivery time');

                $table->foreign('client_id')->references('id')->on('clients')->cascadeOnDelete();
                $table->foreign('tariff_id')->references('id')->on('tariffs')->cascadeOnDelete();
                $table->timestamps();
            }
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
