function CheckSlideADD(FromName)
{  
  if(cktip('pict|jpg|png|gif|jpeg,filesname,圖片',1))
  {
    if(confirm('確定新增 ? '))
    {
      document.getElementById(FromName).submit();
    }
  }
}

function CheckSlideEDIT(FromName)
{  
  if(cktip('pict|jpg|png|gif|jpeg,filesnames,圖片',1))
  {
    if(confirm('確定編輯 ? '))
    {
      document.getElementById(FromName).submit();
    }
  }
}