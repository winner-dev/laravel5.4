
/*
 *	 新增
 */
function Checkproduct_seriesADD(FromName)
{
	if(cktip('name,other,類別名稱',1))
    { 
        if(confirm('確定新增 ? '))
        {
          document.getElementById(FromName).submit();
        }
    }
}

/*
 *	 編輯
 */
function Checkproduct_seriesEDIT(FromName)
{
	if(cktip('name,other,類別名稱',1))
    { 
        if(confirm('確定編輯 ? '))
        {
          document.getElementById(FromName).submit();
        }
    }
}



/*
 *  轉跳系列設定頁
 */
function ProductSeries(Method)
{  
	location.href='/backend/Product/'+Method+'_series';
}

/*
 *  轉跳屬性設定頁
 */
function Productproperty()
{  
    location.href='/backend/Product/property';
}

/*
 *  屬性類別名稱 新增
 *
 */
function Checkcategory_propertyADD(FromName)
{
    if(cktip('name,other,名稱',1))
    { 
        if(confirm('確定新增 ? '))
        {
          document.getElementById(FromName).submit();
        }
    }
}

/*
 *  屬性類別名稱 編輯
 *
 */
function Checkcategory_propertyEDIT(FromName)
{
    if(cktip('name,other,名稱',1))
    { 
        if(confirm('確定編輯 ? '))
        {
          document.getElementById(FromName).submit();
        }
    }
}

/*
 *  屬性 新增
 *
 */
function Checkproperty_secondADD(FromName)
{
    if(cktip('name,other,名稱',1))
    { 
        if(confirm('確定新增 ? '))
        {
          document.getElementById(FromName).submit();
        }
    }
}

/*
 *  屬性 編輯
 *
 */
function Checkproperty_secondEDIT(FromName)
{
    if(cktip('name,other,名稱',1))
    { 
        if(confirm('確定編輯 ? '))
        {
          document.getElementById(FromName).submit();
        }
    }
}

/*
 *  產品頁 切換系列顯示
 */
function ChangSeries(Method)
{
    var SeriesVal = $('#Series').val();
    if(SeriesVal!=0)
    {
        location.href='/backend/Product/'+Method+'/'+SeriesVal;
    }
}

/*
 *   新增
 */
function CheckproductADD(FromName)
{
	if(cktip('pict|jpg|png|gif,filesname,主圖,name,other,中文名稱,model,other,型號,SeriesID,optoin,類別設定',1))
    { 
        if(confirm('確定新增 ? '))
        {
          document.getElementById(FromName).submit();
        }
    }
}

/*
 *   編輯
 */
function CheckproductEDIT(FromName)
{
	if(cktip('pict|jpg|png|gif,filesnames,主圖,name,other,中文名稱,model,other,型號,SeriesID,optoin,類別設定',1))
    { 
        if(confirm('確定編輯 ? '))
        {
          document.getElementById(FromName).submit();
        }
    }
}



/*
 *  相關商品設定
 */
function AddRelatedProducts()
{
    var arr = new Array(); 
    var all = ""; 
    $("#RelatedProductsID option").each(function () {
        var txt = $(this).text(); 
        var val = $(this).val(); 
        var node = '<option value="' + val + '">' + txt + '</option>';
        arr.push(node);
        all += node;
    });
    var RowsNumber = $('#pkg_table tr').length;
    var i = RowsNumber+1;
    var trtd = '<tr id="row'+i+'">'+
                '<td align="left">'+
                  '<select id="RelatedProductsID_'+i+'" name="RelatedProductsID[]" style="width:50%">'+all+
                  '</select>'+
                  '<a href="javascript:void(0)" onclick="del_trtd('+i+')" style="color:red">  X</a>'+
                '</td>'+
              '</tr>';
    $('#pkg_table').append(trtd);
}

/*
 *  動態js新增的區塊移除
 */
function del_trtd(i)
{
    if(confirm('確定移除??'))
    {
        $('#row'+i).remove();
    } 
}


/*
 *  耐磨 多圖檔上傳 編輯
 */
function Checkproduct_mpictEDIT(FromName)
{
   if(cktip('pict|jpg|png|gif,filesnames,圖檔',1))
    { 
        if(confirm('確定編輯 ? '))
        {
          document.getElementById(FromName).submit();
        }
    } 
}




/*
 *  多頁籤
 */
function Checkproduct_tagADD(FromName)
{
    if(cktip('name,other,標籤名稱',1))
    { 
        if(confirm('確定新增 ? '))
        {
          document.getElementById(FromName).submit();
        }
    }
}

function Checkproduct_tagEDIT(FromName)
{
    if(cktip('name,other,標籤名稱',1))
    { 
        if(confirm('確定編輯 ? '))
        {
          document.getElementById(FromName).submit();
        }
    }
}


/*
 *  多頁籤設定
 */
function AddTag()
{
    var arr = new Array(); 
    var all = ""; 
    $("#TagID option").each(function () {
        var txt = $(this).text(); 
        var val = $(this).val(); 
        var node = '<option value="' + val + '">' + txt + '</option>';
        arr.push(node);
        all += node;
    });
    var RowsNumber = $('#pkg_TagID tr').length;
    var i = RowsNumber+1;
    var trtd = '<tr id="row_TagID'+i+'">'+
                '<td align="left">'+
                  '<select id="TagID_'+i+'" name="TagID[]" style="width:50%">'+all+
                  '</select>'+
                  '<a href="javascript:void(0)" onclick="del_TagID('+i+')" style="color:red">  X</a>'+
                '</td>'+
              '</tr>';
    $('#pkg_TagID').append(trtd);
}


/*
 *  動態js新增的區塊移除
 */
function del_TagID(i)
{
    if(confirm('確定移除??'))
    {
        $('#row_TagID'+i).remove();
    } 
}



function Checkca1ADD(FromName)
{
    if(cktip('name,other,類別名稱',1))
    { 
        if(confirm('確定新增 ? '))
        {
          document.getElementById(FromName).submit();
        }
    }
}

function Checkca1EDIT(FromName)
{
    if(cktip('name,other,類別名稱',1))
    { 
        if(confirm('確定編輯 ? '))
        {
          document.getElementById(FromName).submit();
        }
    }
}

function Checkca2ADD(FromName)
{
    if(cktip('upid,option,分類,name,other,類別名稱',1))
    { 
        if(confirm('確定新增 ? '))
        {
          document.getElementById(FromName).submit();
        }
    }
}

function Checkca2EDIT(FromName)
{
    if(cktip('upid,option,分類,name,other,類別名稱',1))
    { 
        if(confirm('確定編輯 ? '))
        {
          document.getElementById(FromName).submit();
        }
    }
}

function Checkca3ADD(FromName)
{
    if(cktip('ca1,option,大分類,ca2,option,中分類,name,other,類別名稱',1))
    { 
        if(confirm('確定新增 ? '))
        {
          document.getElementById(FromName).submit();
        }
    }
}

function Checkca3EDIT(FromName)
{
    if(cktip('ca1,option,大分類,ca2,option,中分類,name,other,類別名稱',1))
    { 
        if(confirm('確定編輯 ? '))
        {
          document.getElementById(FromName).submit();
        }
    }
}



/*
 *  檔案設定
 */
function AddFile()
{
    var arr = new Array(); 
    var all = ""; 
    $("#FileID option").each(function () {
        var txt = $(this).text(); 
        var val = $(this).val(); 
        var node = '<option value="' + val + '">' + txt + '</option>';
        arr.push(node);
        all += node;
    });
    var RowsNumber = $('#pkg_FileID tr').length;
    var i = RowsNumber+1;
    var trtd = '<tr id="row_FileID'+i+'">'+
                '<td align="left">'+
                  '<select id="FileID_'+i+'" name="FileID[]" style="width:50%">'+all+
                  '</select>'+
                  '<a href="javascript:void(0)" onclick="del_FileID('+i+')" style="color:red">  X</a>'+
                '</td>'+
              '</tr>';
    $('#pkg_FileID').append(trtd);
}


/*
 *  動態js新增的區塊移除
 */
function del_FileID(i)
{
    if(confirm('確定移除??'))
    {
        $('#row_FileID'+i).remove();
    } 
}

/*
 *  耐磨 多圖檔上傳 編輯
 */
function Check_mpictEDIT(FromName)
{
   if(cktip('pict|jpg|png|gif,filesnames,圖檔',1))
    { 
        if(confirm('確定編輯 ? '))
        {
          document.getElementById(FromName).submit();
        }
    } 
}



