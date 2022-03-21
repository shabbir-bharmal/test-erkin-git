<?php

use Illuminate\Support\Facades\Route;

Route::view('/', 'dashboard');

Route::view('/{any}', 'dashboard')->where('any', '.*');
