function handleAjaxError( xhr, textStatus, error ) 
{
  show_toast('訊息通知','系統繁忙,請稍後再試','toast-bottom-left','error',3000); 
}

function trim(strvalue) 
{ 
  ptntrim = /(^\s*)|(\s*$)/g; 
  return strvalue.replace(ptntrim,"");
} 
/*
 *  後台共用刪除 (多選刪除)
 *
 */
function Sellistda(e,id,table)
{     
  var aa = document.getElementsByName(id);
  var m=aa.length;
  var ids=new Array();
  for(var i=0;i<m;i++)
  {
    if(aa[i].checked)
    {
      ids[ids.length]=aa[i].value;
    }
  }
  if(ids.length==0) 
  {
    show_toast('訊息通知','請選擇要刪除的資料','toast-top-center','error',1000);
  }
  else 
  {
    if(confirm('您確定要刪除??'))
    {
      ids = ids.join('-');
      AjaxPostDelete(table,ids);
    }
  } 
}

/*
 *  刪除 單選刪除
 *
 */
function DeleteSingle(table,id)
{
  if(confirm('您確定要刪除??'))
  {
    AjaxPostDelete(table,id);
  }
}

/*
 *  刪除用的AJAX
 */
function AjaxPostDelete(table,ids)
{
  var url='/backend/Deletes/Actions';
  var PosttData = JSON.stringify({
          "Table": table,
          "id":ids
      });

  jQuery.ajax({
    type: 'POST', 
    url: url,
    data:PosttData,  
    dataType: 'json',  
    error: handleAjaxError,
    success: function(data)
    {     
      if(data.hasOwnProperty("result"))
      {
        var result  = JSON.stringify(data.result);
        if(result=='true')
        {
          show_toast('訊息通知',JSON.stringify(data.msg),'toast-top-center','success',1000); 
          setTimeout("location.reload()", 1000 )
        }
        else
        {
          show_toast('訊息通知',JSON.stringify(data.msg),'toast-top-center','error',3000); 
        }
      }
      else
      {
        show_toast('訊息通知','系統繁忙,請稍後再試','toast-top-center','error',3000); 
      }
    }
  });
} 
//全選 全不選
function checkAll(e, itemName)
{
  var aa = document.getElementsByName(itemName);
  for(var i=0; i<aa.length; i++)
  {
    aa[i].checked = e.checked;
  }
}

//toast msg jquery
function show_toast(title,msg,position,Command,sec)
{
  var i = -1;
  var toastCount = 0;
  var $toastlast;
  var toastIndex = toastCount++;
  toastr.options = {
                     "closeButton": true,
                     "debug": false,
                     "newestOnTop": false,
                     "progressBar": false,
                     "positionClass": position,
                     "preventDuplicates": false,
                     "onclick": null,
                     "showDuration": "300",
                     "hideDuration": "1000",
                     "timeOut": sec,
                     "extendedTimeOut": "1000",
                     "showEasing": "swing",
                     "hideEasing": "linear",
                     "showMethod": "fadeIn",
                     "hideMethod": "fadeOut"
                  };
   var $toast = toastr[Command](msg, title);
   $toastlast = $toast;
}

function logout()
{
  if(confirm('確認登出??'))
  {
    location.href='/backend/Login/Logout';
  }
}


/*
 *  圖檔上傳相關
 *
 */
function FormatFloat(src,pos,sel)
{
    switch(sel)
    {
        case 'f'://無條件捨去
            return Math.floor(src*Math.pow(10, pos))/Math.pow(10, pos);
          break;
        
        case 'c'://無條件進位
            return Math.ceil(src*Math.pow(10, pos))/Math.pow(10, pos);
          break;
        
        default://四捨五入
            return Math.round(src*Math.pow(10, pos))/Math.pow(10, pos);
          break;
    }
}
/*
 *  圖檔上傳相關
 *
 */
function show_size(len)
{
  var da=new Array("B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB");
  var i=0;
  while((len/1024)>1)
  {
    len=len/1024;
    ++i;
  }
  return FormatFloat(len,2,'r')+da[i];
}
/*
 *  圖檔上傳相關
 *
 */
function check_sname(val,ckval)
{
  var sname=val.split('.');
  var se=sname[sname.length-1].toLowerCase();
  var mm=ckval.length;
  var ckstr=false;
  for(var kk=0;kk<mm;kk++)
  {
    if(se==ckval[kk]) 
    {
      ckstr=true;
      break;
    }
  }
  return ckstr;
}

/*
 *  圖檔上傳
 *
 */
var Rupload={
    _upid : '',//上傳中id
    _upnum : '',//上傳中num
    _fun : 'msg',//上傳完成執行函式
    _obj : new Object(),
    //建立上傳按鈕 　按鈕id,按鈕名稱,陣列(允許的副檔名),上傳位置,(msg->顯示提示,nomsg->不顯示提式,函式)
    create : function(id,note,type,url,fun)
    {
      $('#'+id).after('<input type="button" value="'+note+'" onclick="Rupload.selfile(\''+id+'\')" /><div id="'+id+'_rupload"></div>');//建立按鈕
      $('#'+id).css({'opacity':0,'width':'0px','height':'0px','font-size':'0px'});//隱藏
      document.getElementById(id).onchange=new Function('Rupload.start_check(this)');//設定事件
      this._obj[id]=new Object();
      this._obj[id]['type']=type;//檔案格式 
      this._obj[id]['file']=new Array();//檔案
      this._obj[id]['num']=0;//目前檔案個數
      this._obj[id]['url']=url;//上傳網址

      if(fun!=undefined) 
      {
        this._fun=fun;
      }
      if(window.PIE)
      {
        $('.input_btn1').each(function()
        {
            PIE.attach(this);
        });
      }
    },
    //選擇檔案
    selfile : function(id)
    {
      $('#'+id).click();
    },
    //上傳檢查
    start_check : function(obj)
    {
      var file=document.getElementById(obj.id);
      if(file.files==undefined) 
      {
        show_toast('訊息通知','你的瀏覽器不支援此操作','toast-top-center','error',1000);
      }
      else
      {
        var m=file.files.length;
        for(var i=0;i<m;i++)
        {
          if(check_sname(file.files[i].name,this._obj[obj.id]['type']))
          {
            this._obj[obj.id]['file'][this._obj[obj.id]['num']]=file.files[i];
            $('#'+obj.id+'_rupload').append('<div id="'+obj.id+'_list_'+this._obj[obj.id]['num']+'" class="upload_div" re="'+this._obj[obj.id]['num']+'">'+file.files[i].name+' ('+show_size(file.files[i].size)+')<span><div class="upload_pro"><div class="upload_probg" id="'+obj.id+'_ruploadper_'+this._obj[obj.id]['num']+'"></div></div></span><span id="'+obj.id+'_ruploadnum_'+this._obj[obj.id]['num']+'">0</span></div>');
            ++this._obj[obj.id]['num'];
          }
        }
        Rupload.start_upload(obj.id);
      }
    },

    //開始上傳
    start_upload : function(id)
    {
      this._upid=id;
      var n=$('#'+id+'_rupload div:first').attr('re');
      this._upnum=n;
      var fd = new FormData();
        fd.append("fileToUpload",this._obj[id]['file'][n]);
        var xhr = new XMLHttpRequest();
        xhr.upload.addEventListener("progress", Rupload.upload_progress, false);
        xhr.addEventListener("load", Rupload.upload_complete, false);
        xhr.addEventListener("error", Rupload.upload_error, false);
        xhr.addEventListener("abort", Rupload.abort_upload, false);
        xhr.open("POST", this._obj[id]['url']);
        xhr.send(fd);
       
    },
    //上傳中
    upload_progress : function(e)
    {
      if(e.lengthComputable) 
      {
        var percentComplete = Math.round(e.loaded * 100 / e.total);
        $('#'+Rupload._upid+'_ruploadper_'+Rupload._upnum).css('width',percentComplete.toString()+'px');
        $('#'+Rupload._upid+'_ruploadnum_'+Rupload._upnum).html(percentComplete.toString()+'%');
      }
      else
      {
        show_toast('訊息通知','無法計算','toast-top-center','error',1000);
      }
    },
    //上傳完成
    upload_complete : function(e)
    {
      var tmp=e.target.responseText.split('`!`');
      switch(tmp[0])
      {
        case 'y'://正常
          $('#'+Rupload._upid+'_ruploadper_'+Rupload._upnum).css('width','100px');
          $('#'+Rupload._upid+'_ruploadnum_'+Rupload._upnum).html('100%');
          $('#'+Rupload._upid+'_list_'+Rupload._upnum).remove();
          if($('#'+Rupload._upid+'_rupload .upload_div').length>0)
          {
            setTimeout(function()
            {
              Rupload.start_upload(Rupload._upid);
            },500);
          }
          else
          {
            Rupload._upid='';
            Rupload._upnum='';
            switch(Rupload._fun)
            {
              case 'msg':               
                show_toast('訊息通知','上傳完成','toast-top-center','success',1000);
                setTimeout(function(){ location.reload(); }, 1000); 
                break;
                
              case 'nomsg':
                break;//不顯示上傳完成
                
              default://執行函式
                if(Rupload._fun!='') 
                {
                  eval(Rupload._fun+";");
                }
                break;
            }
              
          }
          break;
          
          default:
            Rupload._upid='';
            Rupload._upnum='';
            show_toast('訊息通知','上傳失敗,請確定操作是否正確','toast-top-center','error',1000);
            $('#'+Rupload._upid+'_rupload').html('');
            break;//不正常操作或系統異常
      } 
    },
    //上傳錯誤
      upload_error : function(){
      show_toast('訊息通知','上傳錯誤','toast-top-center','error',3000);
    },
    //放棄上傳
    abort_upload : function()
    {
      
    }
    
};