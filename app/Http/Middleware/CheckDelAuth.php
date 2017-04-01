<?php

namespace App\Http\Middleware;

use Closure;

class CheckDelAuth
{
  /**
   * 執行請求過濾器。
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \Closure  $next
   * @return mixed
   */
  public function handle($request, Closure $next)
  {
      //$LoginKey = Session::get('LoginKey');
      if (isset($LoginKe))
      {
          return redirect('/');
      }
      else
      {
        return $next($request);
      }


  }
}
