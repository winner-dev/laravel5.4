<?php

namespace App\Http\Middleware;
use Closure, Session;

class BackendLoginCheck
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if(Session::get('BackendLoginStatus')=='')
        {
          Session::put('BackendLoginError','驗證失敗,請先登入授權!');
          return redirect('/backend/login');
        }
        else
        {
          return $next($request);
        }
    }
}
