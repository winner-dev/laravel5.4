<?php

namespace App\Http\Controllers;

use App\Repositories\ArticleRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Session;
class UserController extends Controller{

    public function __construct(ArticleRepository $repository)
    {
        $this->repository = $repository;
    }

    public function index()
    {
        $value = Session::get('name', 'winner');
        echo 'session 演示 > get > '.  $value;
    }
}
