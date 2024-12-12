<?php

use Illuminate\Http\Request;
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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('/auth/login','AuthController@authenticate')->name("authenticate");

Route::get('/getAllAboutData','AboutController@getAllAboutData')->name("getAllAboutData");
Route::post('/storeAbout','AboutController@storeAbout')->name("storeAbout");
Route::post('/updateAbout/{id}','AboutController@updateAbout')->name("updateAbout");

Route::get('/getAllTeamData','TeamController@getAllTeamData')->name("getAllTeamData");
Route::post('/storeTeam','TeamController@storeTeam')->name("storeTeam");
Route::post('/updateTeam/{id}','TeamController@updateTeam')->name("updateTeam");

Route::get('/getAllTestimonialData','TestimonialController@getAllTestimonialData')->name("getAllTestimonialData");
Route::post('/storeTestimonial','TestimonialController@storeTestimonial')->name("storeTestimonial");
Route::post('/updateTestimonial/{id}','TestimonialController@updateTestimonial')->name("updateTestimonial");

Route::get('/getAllEventsData','EventController@getAllEventsData')->name("getAllEventsData");
Route::get('/getSingleEventData/{id}','EventController@getSingleEventData')->name("getSingleEventData");
Route::post('/storeEvent','EventController@storeEvent')->name("storeEvent");
Route::post('/editEvent/{id}','EventController@editEvent')->name("editEvent");

Route::get('/getAllCoursesData','CourseController@getAllCoursesData')->name("getAllCoursesData");
Route::post('/storeCourse','CourseController@storeCourse')->name("storeCourse");
Route::post('/editCourse/{id}','CourseController@editCourse')->name("editCourse");

Route::get('/getAllSlidesData','SlideController@getAllSlidesData')->name("getAllSlidesData");
Route::post('/storeSlides','SlideController@storeSlides')->name("storeSlides");
Route::post('/editSlides/{id}','SlideController@editSlides')->name("editSlides");

Route::get('/getAllPartnersData','PartnerController@getAllPartnersData')->name("getAllPartnersData");