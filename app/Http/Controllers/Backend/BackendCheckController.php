<?php
/**
 *  @todo 後台登入,驗證, 授權 控制器
 *  @todo 使用Repositories的EmployeeRepository庫
 *
 *
 */



namespace App\Http\Controllers\Backend;

use App\Http\Controllers\My_Controller;
use App\Repositories\EmployeeRepository;
use Illuminate\Http\Response;
use Input, Request, Validator, Session, Hash;


/**
 * @todo 後台登入帳密檢查
 *
 */
class BackendcheckController extends My_Controller
{
    /**
     * @todo 注入employee 表的db 控制
     *
     */
    protected $repository;
    public function __construct(EmployeeRepository $repository)
    {
        $this->DB = $repository;
    }

    /**
     *  @todo 登入帳號密碼檢查Method
     *
     */
    public function CheckLogin(Request $request)
    {
      $uRL = '/backend/login';

      /**
       *  @todo 條件規則設置
       */
      $rules      = ['captcha' => 'required|captcha'];
      $validator  = Validator::make(Request::all(), $rules);

      /**
       *  @todo 驗證碼先檢查
       *  @return 失敗了就返回登入頁
       */
      if ($validator->fails())
      {
          Session::put('BackendLoginError','驗證碼錯誤');
      }
      else
      {
          $row  = $this->DB->get_row("acc", Request::input('account'));
          //var_dump($row);

          if (!empty($row))
          {
            if (Hash::check(Request::input('password'), $row->psd))
            {
              Session::put(
              [
                "BackendLoginStatus"  =>  true,
                "BackendLoginID"      =>  $row->id,
                "BackendLoginName"    =>  $row->name,
                "BackendLoginGID"     =>  $row->upid
              ]);


              Session::put('BackendLoginSuccess','登入成功');
              $uRL = '/backend/home';
            }
            else
            {
              Session::put('BackendLoginError','密碼錯誤');
            }
          }
          else
          {
            Session::put('BackendLoginError','帳號未註冊');
          }
      }

      return redirect($uRL);
    }

    /**
     *  @todo 後台登出
     *
     */
    public function logout()
    {
      Session::forget('BackendLoginStatus');
      Session::forget('BackendLoginID');
      Session::forget('BackendLoginName');
      Session::forget('BackendLoginGID');
      return redirect('/backend/login');
    }

    /**
     *  @todo 後台首頁
     *
     */
    public function home()
    {
      return view('backend/Home/index');
    }


}
