

function CheckepaperADD(FromName){  
  if(cktip('subject,other,主旨',1)){ 
    if($("input[name='types']:checked").val()==1){
      if(cktip('pict|jpg|png|gif,filesname,圖片',1)){ 
         if(confirm('確定新增 ? ')){
           document.getElementById(FromName).submit();
         }
      }
    }else{
      if(cktip('info,ckeditor,詳細說明',1)){ 
         if(confirm('確定新增 ? ')){
           document.getElementById(FromName).submit();
         }
      }
    }
  }
}

function CheckepaperEDIT(FromName){  
  if(cktip('subject,other,主旨',1)){ 
    if($("input[name='types']:checked").val()==1){
      if(cktip('pict|jpg|png|gif,filesnames,圖片',1)){ 
         if(confirm('確定編輯 ? ')){
           document.getElementById(FromName).submit();
         }
      }
    }else{
      if(cktip('info,ckeditor,詳細說明',1)){ 
         if(confirm('確定編輯 ? ')){
           document.getElementById(FromName).submit();
         }
      }
    }
  }
}

function ChgImgType(t)
{
  if(t==1)
  {        
    $('#img_type').val('');
    $('#pict').attr('disabled',false);
    $('#tp2').hide();
  }
  else
  {
    $('#img_type').val('');
    $('#pict').attr('disabled','disabled');
    $('#tp2').show();
  }
}

function SendCronTab(FromName)
{  
  if(cktip('send_date,other,發送日期',1)){ 
    if(confirm('確定排程 ? '))
    {
      document.getElementById(FromName).submit();
    }
  }
}