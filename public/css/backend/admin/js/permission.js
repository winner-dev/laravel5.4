

function CheckPermissionGroupsADD(FromName)
{  
  if(cktip('name,other,群組名稱',1))
  { 
    if(confirm('確定新增 ? '))
    {
      document.getElementById(FromName).submit();
    }
  }
}

function CheckPermissionGroupsEDIT(FromName)
{  
  if(cktip('name,other,群組名稱',1))
  { 
    if(confirm('確定編輯 ? '))
    {
      document.getElementById(FromName).submit();
    }
  }
}

function Checkemployee_listADD(FromName)
{  
  if(cktip('name,other,管理者名稱,acc,other,管理者帳號,psd,other,管理者密碼,email,mails,mail',1))
  { 
    if(confirm('確定新增 ? '))
    {
      document.getElementById(FromName).submit();
    }
  }
}

function Checkemployee_listEDIT(FromName)
{  
  if(cktip('name,other,管理者名稱,acc,other,管理者帳號,psd,other,管理者密碼,email,mails,mail',1))
  { 
    if(confirm('確定編輯 ? '))
    {
      document.getElementById(FromName).submit();
    }
  }
}

