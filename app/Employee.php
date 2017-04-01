<?php

namespace APP;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
  // 定義當使用 __construct($data) 或 create($data) 時
  // 可以被修改的欄位，進而保護其他欄位不被修改
  protected $table = 'employee'; //指定表
  public $timestamps = false; //停用時間戳
  //protected $fillable = ['name'];//指定被動欄位
}
