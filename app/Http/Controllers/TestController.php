<?php

namespace App\Http\Controllers;

//use DB;
//use App\Http\Controllers\TestController;
use App\Repositories\TestSampleCodeRepository;
use Illuminate\Http\Response;
use Session;

class TestController extends Controller
{
    protected $repository;

    // 利用 Service Container (DI) 來自動注入 Repository
    public function __construct(TestSampleCodeRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * 顯示應用程式中所有使用者的列表。
     *
     * @return Response
     */
    public function index()
    {
        #回傳陣列 strclass
        //$users  = DB::select('select * from user ');
        $users = $this->repository->latest5();

        #回傳單一筆 完整欄位
        //$users2 = DB::table('user')->where('id', 1)->first();
        $users2='';
        #回傳單一筆 單一欄位
        //$users3 = DB::table('user')->where('id', 1)->value('id');
        $users3='';
        #執行單一語法 適用在更新 刪除 清空 drop 等等
        //$users4 = DB::statement('drop table users');

        #執行 新增 更新 刪除
        //$affected = DB::update('update users set votes = 100 where name = ?', ['John']);
        //DB::insert('insert into users (id, name) values (?, ?)', [1, 'Dayle']);
        //$deleted = DB::delete('delete from users');

        #session 演示
        $da =
        [
          'user'        => $users,
          'CurrSession' => Session::get('name')
        ];


        return view('user',$da);
    }

    /**
     *  新增
     */
    public function insertUser()
    {
      //DB::insert('insert into user (name) values (?)', $_POST['name']);
      /*DB::table('user')->insert(
          ['name' => $_POST['name']]
      );*/
      $users = $this->repository->insertUser([
          'name' => $_POST['name']
      ]);

      return redirect('test/index');
    }

    /**
     *  編輯
     */
    public function putUser()
    {
      DB::update("update user set name='{$_POST['name']}' where id='{$_POST['id']}' ");
      return redirect('test/index');
    }

    /**
     *  刪除
     */
    public function deleteUser($id)
    {
      DB::delete("delete from user where id='{$id}' ");
      return redirect('test/index');
    }
}
