<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Auth::routes();

Route::group(['middleware' => ['auth']], function() {
	Route::get('/home', 'HomeController@index')->name('home');
	Route::get('/getEmployees', 'EmployeeController@index');
	Route::post('/employeeStore', 'EmployeeController@store');
	Route::get('/editEmployee/{id}', 'EmployeeController@edit');
	Route::post('/employeeUpdate', 'EmployeeController@update');
	Route::get('/deleteEmployee/{id}', 'EmployeeController@destroy');
});

Route::get('{any}', function () {
    return view('welcome');
})->where('any','.*');

