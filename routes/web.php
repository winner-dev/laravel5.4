<?php

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


/**
 *  @todo 前台
 *
 */
Route::get('/', function () {
    return view('welcome');
});

/**
 *  @todo 練習
 */
Route::group(['prefix' => 'test'], function() {
    Route::get('index','TestController@index');
    Route::post('insertUser', 'TestController@insertUser');
    Route::post('putUser', 'TestController@putUser');
    #正則過濾
    Route::get('deleteUser/{id}', 'TestController@deleteUser')->where('id', '[0-9]+');
});

/**
 *  @todo 後台統一入口
 *
 */
Route::group(['prefix' => 'backend'], function() {
    /**
     *  @todo 預設走login
     *
     */
    Route::get('/', function () {
      return redirect('/backend/login');
    });


    /**
     *  @todo 登入 UI
     *  @return view
     *  @see 使用laravel 外掛驗證碼 | middleware 檢查已登入就導向首頁
     */
    Route::get('login', function () {

        $da=
        [
          "captcha_img" =>  captcha_img(),
          "error"       =>  Session::get('BackendLoginError')
        ];
        Session::forget('BackendLoginError');
        return view('backend/Login/index',$da);
    })->middleware('BackendCheckIsLogin');

     /**
      *  @todo 登入檢查
      *  @see 檢查完成後會自動導入到後台的首頁
      */
     Route::post('CheckLogin','Backend\BackendCheckController@CheckLogin');

     /**
      *  @todo 登出
      */
     Route::get('logout','Backend\BackendCheckController@logout');

     /**
      *
      *  @todo 首頁後台
      */
     Route::get('home','Backend\BackendHomeController@index')->middleware('BackendLoginCheck');

});
