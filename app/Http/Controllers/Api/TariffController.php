<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\TariffRepository;
use Illuminate\Http\Response;

class TariffController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     */
    public function index()
    {
        return (new TariffRepository())->getAll();
    }

}
