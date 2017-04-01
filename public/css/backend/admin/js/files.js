function CheckFilesADD(FromName)
{  
  if(cktip('name,other,名稱,files|jpg|png|gif|doc|docx|csv|pdf|xls|xlsx,filesnames,圖片',1))
  {
    if(confirm('確定新增 ? '))
    {
      document.getElementById(FromName).submit();
    }
  }
}

function CheckFilesEDIT(FromName)
{  
  if(cktip('name,other,名稱,files|jpg|png|gif|doc|docx|csv|pdf|xls|xlsx,filesnames,圖片',1))
  {
    if(confirm('確定編輯 ? '))
    {
      document.getElementById(FromName).submit();
    }
  }
}