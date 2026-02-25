<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    // return view('welcome');
    return Inertia::render('Questions/Index',
    [
        'questions' => [
            [
                'id' => 1,
                'title' => 'Question 1'
            ],
            [
                'id' => 2,
                'title' => 'Question 2'
            ]
        ]
    ]);  
})->name('questions.index');

Route::get('/questions/{id}', function ($id){
    return Inertia('Questions/Show', [
        'question' => [
            'id' => $id,
            'title' => 'Question '. $id
        ]
    ]);
})->name('questions.show');
