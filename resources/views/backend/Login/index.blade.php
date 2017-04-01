<div style="margin:10px;color: #ff0000;text-align:center;font-size:30pt;"><?php echo $error;?></div>
<!DOCTYPE html>
<!--
BeyondAdmin - Responsive Admin Dashboard Template build with Twitter Bootstrap 3.3.6
Version: 1.6.0
Purchase: https://wrapbootstrap.com/theme/beyondadmin-adminapp-angularjs-mvc-WB06R48S4
-->

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title>後台登入</title>

    <meta name="description" content="login page" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="shortcut icon" href="/asset/images/icons/favicon.png" type="image/x-icon">
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

    <!--Basic Styles-->
    <link href="/js/backend/login/css/bootstrap.min.css" rel="stylesheet" />
    <link id="bootstrap-rtl-link" href="" rel="stylesheet" />
    <link href="/css/backend/login/css/font-awesome.min.css" rel="stylesheet" />

    <!--Fonts-->
    <link href="http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,400,600,700,300" rel="stylesheet" type="text/css">

    <!--Beyond styles-->
    <link id="beyond-link" href="/css/backend/login/css/beyond.min.css" rel="stylesheet" />
    <link href="/css/backend/login/css/demo.min.css" rel="stylesheet" />
    <link href="/css/backend/login/css/animate.min.css" rel="stylesheet" />
    <link id="skin-link" href="" rel="stylesheet" type="text/css" />

    <!--Skin Script: Place this script in head to load scripts for skins and rtl support-->
    <script data-cfasync="false" type="text/javascript src="/js/backend/login/js/skins.min.js"></script>
</head>
<!--Head Ends-->
<!--Body-->
<body>
    <div class="login-container animated fadeInDown">
        <div class="loginbox bg-white">
            <div class="loginbox-title">SIGN IN</div>
            <div class="loginbox-social">
                <div class="social-title ">Connect with Your Accounts</div>
                <!--div class="social-buttons">
                    <a href="" class="button-facebook">
                        <i class="social-icon fa fa-facebook"></i>
                    </a>
                    <a href="" class="button-twitter">
                        <i class="social-icon fa fa-twitter"></i>
                    </a>
                    <a href="" class="button-google">
                        <i class="social-icon fa fa-google-plus"></i>
                    </a>
                </div-->
            </div>
            <!--div class="loginbox-or">
                <div class="or-line"></div>
                <div class="or">OR</div>
            </div-->

            <form method="post" action="/backend/CheckLogin">
            {{csrf_field()}}
            <div class="loginbox-textbox">
                <input type="text" class="form-control" id="Account" name="account" autocomplete="off" placeholder="Account" />
            </div>
            <div class="loginbox-textbox">
                <input type="password" class="form-control" id="Password" name="password" autocomplete="off" placeholder="Password" />
            </div>
            <!--div class="loginbox-forgot">
                <a href="">Forgot Password?</a>
            </div-->

            <div class="loginbox-textbox">
                <input class="form-control" type="text" id="captcha" name="captcha" autocomplete="off" placeholder="驗證碼" />
            </div>

            <div class="loginbox-textbox" style="text-align:center;">
              <?php echo $captcha_img;?>             (不分大小寫)
            </div>
            <div class="loginbox-submit">
                <input type="submit" class="btn btn-primary btn-block" value="Login">
            </div>
            </form>
            <!--div class="loginbox-signup">
                <a href="register.html">Sign Up With Email</a>
            </div-->
        </div>
        <div class="logobox" style="text-align:center;">
            2016 ~ 2017  Copyright. All Rights Reserved.
        </div>
    </div>

    <!--Basic Scripts-->
    <script data-cfasync="false" type="text/javascript" src="/js/backend/login/js/jquery.min.js"></script>
    <script data-cfasync="false" type="text/javascript" src="/js/backend/login/js/bootstrap.min.js"></script>
    <script data-cfasync="false" type="text/javascript" src="/js/backend/login/js/slimscroll/jquery.slimscroll.min.js"></script>

    <!--Beyond Scripts-->
    <script data-cfasync="false" type="text/javascript"  src="/js/backend/login/js/beyond.js"></script>



</body>
<!--Body Ends-->
</html>
