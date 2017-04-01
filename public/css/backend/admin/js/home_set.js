
function HomeSetFromSave(FromName)
{  
  if(cktip('sitename,other,站台名稱,facebook_link,other,facebook_link,youtube_link,other,youtube_link',1))
  {
    if(confirm('確定儲存 ? '))
    {
      document.getElementById(FromName).submit();
    }
  }
}

