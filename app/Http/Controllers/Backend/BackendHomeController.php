<?php
/**
 *  @todo 後台首頁
 * 
 *
 *
 */



namespace App\Http\Controllers\Backend;

//use App\Repositories\EmployeeRepository;

use App\Http\Controllers\My_Controller;

use Input, Request, Session;


/**
 * @todo 
 *
 */
class BackendHomeController extends My_Controller
{
    /**
     * @todo 
     *
     */
    protected $repository;
    public function __construct()
    {
        
    }

    

    /**
     *  @todo 後台首頁
     *
     */
    public function index()
    {
      echo view('backend/Common/header');
      echo view('backend/Home/index');
      echo view('backend/Common/footer');
    }


}
