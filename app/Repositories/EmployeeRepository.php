<?php

/**
 *  ＠後台管理者的身份表  接 Employee Class使其具有對employee表操作的權限
 *  ＠在此不寫邏輯控制 , 盡可能單純單一工作 (solid)並且具有彈性 , 可全域共用同思維架構method
 */

namespace App\Repositories;

//use DB;
use App\Employee;

class EmployeeRepository
{
    protected $table;

    public function __construct(Employee $table)
    {
        $this->table = $table;
    }

    /**
     *  @使用Eloquent ORM
     *  @取表單裡的一筆資料回傳物件
     *
     */
    public function get_row($Field,$Value)
    {
      return $this->table::where($Field, $Value)->first();
    }


}
