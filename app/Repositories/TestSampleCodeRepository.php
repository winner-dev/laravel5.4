<?php

namespace App\Repositories;

use App\user;

class TestSampleCodeRepository
{

  public function latest5()
  {
    return user::query()->orderBy('id', 'desc')->limit(5)->get();
  }

  public function insertUser(array $attributes)
  {
    return User::create($attributes);
  }
}
