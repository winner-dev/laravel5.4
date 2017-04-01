
function ChgImgType(t)
{
    if(t==1)
    {        
        $('#img_type_youtube').val('');
        $('#pict').attr('disabled',false);
        $('#img_type_youtube').attr('disabled', 'disabled');
        $('#pict_url').attr('disabled', false);
    }
    else
    {
        $('#pict_url').val('');
        $('#pict').attr('disabled', 'disabled');
        $('#img_type_youtube').attr('disabled', false);
        $('#pict_url').attr('disabled', 'disabled');
    }
}


function CheckNewsADD(FromName)
{  
  if(cktip('subject,other,主旨,info,ckeditor,內容',1))
  {
    if($("input[name='img_type']:checked").val()=='pict')
    {
      if(cktip('pict|jpg|png|gif,filesname,圖片',1))
      { 
        if(confirm('確定新增 ? '))
        {
          document.getElementById(FromName).submit();
        }
      }
    }
    else
    {
      if(cktip('img_type_youtube,other,youtube',1))
      { 
        if(confirm('確定新增 ? '))
        {
          document.getElementById(FromName).submit();
        }
      }
    }
  }
}

function CheckNewsEDIT(FromName)
{  
  if(cktip('subject,other,主旨,info,ckeditor,內容',1))
  {
    if($("input[name='img_type']:checked").val()=='pict')
    {
      if(cktip('pict|jpg|png|gif,filesnames,圖片',1))
      { 
        if(confirm('確定編輯 ? '))
        {
          document.getElementById(FromName).submit();
        }
      }
    }
    else
    {
      if(cktip('img_type_youtube,other,youtube',1))
      { 
        if(confirm('確定編輯 ? '))
        {
          document.getElementById(FromName).submit();
        }
      }
    }
  }
}