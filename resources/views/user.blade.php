<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Raleway', sans-serif;
                font-weight: 100;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 12px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
        </style>
    </head>
    <body>
      <div style="padding:5px;">laravel 演練目標</div>
      <div style="padding:5px;">1-1. db Eloquent 一般操作√  , 連線√ , 新增√/編輯√/刪除√/查詢√/分頁</div>
      <div style="padding:5px;">1-2. db Eloquent 封裝操作√  , 連線√ , 新增√/編輯/刪除/查詢√/分頁</div>
      <div style="padding:5px;">2. session put√ , get√, 權限/登入/登出/購物車</div>
      <div style="padding:5px;">3. api JWT驗證 , return json</div>
      <div style="padding:5px;">4. 圖檔上傳 , 單圖/多圖</div>
      <div style="padding:5px;">5. 驗證碼</div>
      <div style="padding:5px;">6. ioC/DI √</div>
      <div style="padding:5px;">7. 封裝 √</div>
      <div style="padding:5px;">8. 單元測試 √</div>
        <div class="flex-center position-ref full-height">
            @if (Route::has('login'))
                <div class="top-right links">
                    @if (Auth::check())
                        <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a href="{{ url('/login') }}">Login</a>
                        <a href="{{ url('/register') }}">Register</a>
                    @endif
                </div>
            @endif

            <div class="content">

              <div class="links">
                  Laravel session操作演示 <br>
                  <?php echo 'Now Session > '. $CurrSession?>
              </div>
              <br>
                <div class="links">
                    Laravel 資料庫操作演示 <br> 新增 / 編輯 / 刪除  / list
                </div>

                <form id="insertForm" name="insertForm" method="post" action="/test/insertUser">
                  <input type="text" name="name">
                  <input type="hidden" name="_token" value="{{ csrf_token() }}">
                  <input type="submit" value="新增">
                </form>

                <?php if($user!=''):foreach($user as $row): ?>
                  <form id="userForm_<?php echo $row->id?>" name="userForm_<?php echo $row->id?>" method="post" action="/test/putUser">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">
                    <input type="hidden" name="id" value="<?php echo $row->id?>">
                    <input type="text" name="name" value="<?php echo $row->name?>">
                    <input type="submit" value="修改">
                    <input type="button" value="刪除" style="cursor:pointer;color:red" onclick="location.href='/test/deleteUser/<?php echo $row->id?>';">
                  </form>

                <?php endforeach;endif;?>


            </div>
        </div>
    </body>
</html>
