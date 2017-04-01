//---------------------20161017-------------------------------
//作用：欄位驗證                                               								
//輸入：欄位,項目,中文名稱                                     							
//輸出：錯誤內容提示訊息                                       							
//--------------------------------------------------------------
function cktip(data,type)
{
	var type;
  	var mydata=data.split(",");
	var m=mydata.length;
	var ckd=1;
	var re='';
	var msg='';
	var ckstr='';
	var uta='';
	var eid='';
	var myeid='';
  	for(i=0,j=1,k=2;i<m;i=i+3,j=j+3,k=k+3) //i=欄位,j=項目,k=中文名稱
  	{	
    	uta='欄位';
    	switch (mydata[j])
	  	{
      		case 'youtube'://youtube 分享網址
            	if(document.getElementById(mydata[i]).value.indexOf('youtu.be')==-1) 
            	{
            		ckstr=false;
            	}
            	else 
            	{
            		ckstr=true;
            	}
            	break;

            case 'youtubes'://youtube 分享網址 可不設定
            	if(trim(document.getElementById(mydata[i]).value)=='') 
            	{
            		ckstr=true;
            	}
            	else
            	{
            		if(document.getElementById(mydata[i]).value.indexOf('youtu.be')==-1) 
            		{
            			ckstr=false;
            		}
                	else 
                	{
                		ckstr=true;
                	}
            	}
            	break;

      		case 'filesname'://檔案上傳含副檔名(編修時可不傳) 	例 file|jpg|png,filesname,檔案
                var myid=mydata[i].split('|');
                if(document.getElementById('id').value!='' && document.getElementById(myid[0]).value=='') 
                {
                	ckstr=true;
                }
                else
                {
	                if(document.getElementById(myid[0]).value!=''){
	                    if(myid[1]=='*') 
	                    {
	                    	ckstr=true;
	                    }
	                    else
	                    {
	                        var sname=document.getElementById(myid[0]).value.split('.');
	                        var se=sname[sname.length-1].toLowerCase();
	                        var mm=myid.length;
	                        ckstr=false;
	                        for(var kk=1;kk<mm;kk++)
	                        {
	                            if(se==myid[kk]) 
	                            {
	                                ckstr=true;
	                                break;
	                            }
	                        }
	                    }
	                }else ckstr=false;
	   			}
                break;

            case 'filesnames':	//檔案上傳(可不傳)
            	var myid=mydata[i].split('|');
                if(document.getElementById(myid[0]).value=='') 
                {
                	ckstr=true;
                }
                else
                {
	                if(document.getElementById(myid[0]).value!='')
	                {
	                    if(myid[1]=='*') 
	                    {
	                    	ckstr=true;
	                    }
	                    else
	                    {
	                        var sname=document.getElementById(myid[0]).value.split('.');
	                        var se=sname[sname.length-1].toLowerCase();
	                        var mm=myid.length;
	                        ckstr=false;
	                        for(var kk=1;kk<mm;kk++)
	                        {
	                            if(se==myid[kk]) 
	                            {
	                                ckstr=true;
	                                break;
	                            }
	                        }
	                    }
	                }
	                else
	                {
	                	ckstr=false;
	                } 
	   			}
            	break;
      		
      		case 'mobile'://手機
          		re = new RegExp(/^[0-9]{10}$/);
			    ckstr=re.test(document.getElementById(mydata[i]).value);
				break;

	    	case 'mail'://email           
			    re = new RegExp(/^(([0-9a-zA-Z_.]+)|([0-9a-zA-Z]+[_.0-9a-zA-Z-]*[0-9a-zA-Z_.]+))@([a-zA-Z0-9-]+[.])+([a-zA-Z]{2}|net|NET|com|COM|gov|GOV|mil|MIL|org|ORG|edu|EDU|int|INT|biz|BIZ|idv)$/);
          		ckstr=re.test(document.getElementById(mydata[i]).value); 
      			break;

	    	case 'mails'://email可不填
		        if(document.getElementById(mydata[i]).value!='')
		        {
	        		re = new RegExp(/^(([0-9a-zA-Z_.]+)|([0-9a-zA-Z]+[_.0-9a-zA-Z-]*[0-9a-zA-Z_.]+))@([a-zA-Z0-9-]+[.])+([a-zA-Z]{2}|net|NET|com|COM|gov|GOV|mil|MIL|org|ORG|edu|EDU|int|INT|biz|BIZ|idv)$/);
	          		ckstr=re.test(document.getElementById(mydata[i]).value); 
          		}
          		else 
          		{
          			ckstr=true;
          		}
	    		break;
      		
      		case 'strrang'://字數範圍       title|5|10
            	var myid=mydata[i].split('|');
            	var words=document.getElementById(myid[0]).value.length;
            	if(parseInt(myid[1])<=words && parseInt(myid[2])>=words) 
            	{
            		ckstr=true;
            	}
            	else 
            	{
            		ckstr=false;
            	}
            	break;
      		
      		case 'pwd'://密碼&確認	例 pwd|ckpwd,pwd,密碼
			    var myid=mydata[i].split('|');
			    if(document.getElementById(myid[0]).value=='') 
			    {
			    	ckstr=false;
			    }
			    else 
			    {
			    	if(document.getElementById(myid[1]).value=='') 
			    	{
			    		ckstr=false;
			    	}
			    	else 
			    	{
			    		if(document.getElementById(myid[1]).value!='' || document.getElementById(myid[1]).value!='')
			    		{
		            		if(document.getElementById(myid[0]).value==document.getElementById(myid[1]).value) 
		            		{
		            			ckstr=true;
		            		}
		            		else
		            		{
		                  		uta='二次不相同';
		                  		ckstr=false;
		            		}    
		          		}
		          		else
		          		{
		          			false;
		          		}
			    	}
			    }
				break;
      
      		case 'num'://數字
			    //re=new RegExp(/^[0-9]{1,}$/);
			    //ckstr=re.test(document.getElementById(mydata[i]).value);
		        if(isNaN(document.getElementById(mydata[i]).value) || trim(document.getElementById(mydata[i]).value)=='') 
		        {
		         	ckstr=false;
		        }
		        else 
		        {
		         	ckstr=true;
		        }
		      	break;

      		case 'nums'://數字可不填
		        if(document.getElementById(mydata[i]).value!='')
		        {
		            //re=new RegExp(/^[0-9]{1,}$/);
		            //ckstr=re.test(document.getElementById(mydata[i]).value);
			        if(isNaN(document.getElementById(mydata[i]).value) || trim(document.getElementById(mydata[i]).value)=='') 
			        {
			        	ckstr=false;
			        }
			        else 
			        {
			        	ckstr=true;
			        }
		        }
		        else 
		        {
		        	ckstr=true;
		        }
		      	break;
     
      		case 'onleeng'://唯 英文
        		var myid=mydata[i].split('|');
		        if(trim(document.getElementById(mydata[i]).value)=='') 
		        {
		        	ckstr=false;
		        }
		        else
		        {
		            var words = document.getElementById(mydata[i]).value;
		            var am=words.length;
		            var letters = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz_";
		            var ai;
		            var c;
		            for(var ai=0; ai<am; ai++ ) 
		            {
		            	c = words.charAt(ai);   
		              	if(letters.indexOf(c)<0)
		              	{
		              		ckstr=false;
		              	}
		            } 
		        }
      			break;
            
            
		    case 'other'://不能空白
			    if(trim(document.getElementById(mydata[i]).value)=='') 
			    {
			    	ckstr=false;
			    }
                else 
                {
                	ckstr=true;
                } 
                break;
		    
            case 'fckeditor'://fckeditor編輯器不能空白
                var fckda=FCKeditorAPI.GetInstance(mydata[i]).GetXHTML(true);
                fckda=fckda.replace(/<[^>].*?>/g,"");
                if(fckda=='') 
                {
                	ckstr=false;
                }
                else 
                {
                	ckstr=true;
                }
                break;

            case 'ckeditor'://ckeditor編輯器不能空白
            	var par=document.getElementById(mydata[i]).parentNode;
            	if(par.id==undefined)
            	{
            		par.setAttribute('id','par');
            	}
            	myeid=par.id;
            	eval("var fckda=CKEDITOR.instances."+mydata[i]+".getData();");
            	fckda=fckda.replace(/<[^>].*?>/g,"");
            	
            	if(fckda=='') 
            	{
            		ckstr=false;
            	}
            	else 
            	{
            		ckstr=true;
            	}
            	break;
            
            case 'agree':	//同意條款checkbox方式
            	if(document.getElementById(mydata[i]).checked) 
            	{
            		ckstr=true;
            	}
            	else 
            	{
            		ckstr=false;
            		if(document.getElementById(mydata[i]).style.display=='none')
            		{
    					var tmps=document.getElementsByTagName('input');
    					var mm=tmps.length;
    					var rid='';
    					for(var qq=0;qq<mm;qq++)
    					{
    						rid=tmps[qq].getAttribute('rid');
    						if(rid==mydata[i]) 
    						{
    							myeid=tmps[qq].id;
    							break;
    						}
    					}
    				}
            	}
            	uta='未勾選';
            	break;
            
        	case 'option':	//select 點選 數字型
		        var selectBox 		= document.getElementById(mydata[i]);
		        var selectedValue 	= selectBox.options[selectBox.selectedIndex].value;
		        if(selectedValue>0) 
		        {
		        	ckstr=true;
		        }
		        else 
		        {
		        	ckstr=false;
		        }
		        break;

        	case 'options':	//select 點選 數字+文字型
          		var selectBox = document.getElementById(mydata[i]);
          		var selectedValue = selectBox.options[selectBox.selectedIndex].value;
          		if(selectedValue!=0) 
          		{
          			ckstr=true;
          		}
          		else 
          		{
          			ckstr=false;
          		}
        		break;    
        
		    default://不能空白
			   	re=new RegExp(/^(.*?)$/);
			   	ckstr=re.test(document.getElementById(mydata[i]).value);      
        		break;
	    } //endswitch

    	if(!ckstr)
    	{
    		if(myeid=='') 
    		{
    			eid=mydata[i].split('|')[0];
    		}
    		else 
    		{
    			eid=myeid;
    		}
            msg=msg+'欄位 '+mydata[k]+uta+' 選擇/輸入'+"\n";
		    ckd=0;
            break;
	    }
    	myeid='';
    } //end for

    if(msg!='')
    {
        if(typeof(type)=='undefined')
        {
        	err_tip_panel(document.getElementById(eid),msg);
        }
        else
        {
          	err_alert_panel(eid,msg);
        } 
    }
    return ckd;
}

//-------------------------------------------------
//作用:錯誤提示訊息
//參數:物件本身,訊息
//---------------------20161017-------------------------------
function err_tip_panel(obj,msg)
{
	if(!document.getElementById('err_bg'))
	{
		$('body').prepend('<div class="err_tip_bg" id="err_bg" style="display:none;"><div class="err_tip_cor"></div><div class="err_tip_content" id="err_content"></div></div>');
	}

    var ptop=parseInt(document.documentElement.scrollTop)+document.body.scrollTop;
	var pleft=parseInt(document.documentElement.scrollLeft);
	var left=parseInt(obj.getBoundingClientRect().left)+pleft;
	var tops=parseInt(obj.getBoundingClientRect().top)+ptop;//obj.offsetHeight
	var brow=GetBrowName();
	
	if(brow=='msie')
	{
	    var iev=parseFloat(navigator.appVersion.split("MSIE")[1]);
	    if(iev<=7)
	    {
	      //修正ie7.6錯誤
	      left=left-2;
	      tops=tops-2;
	    }
	    if(iev<=9)
	    {
	    	tops +=20;
	    	$('.err_tip_cor').css('display','none');
	    }
	}

	$('#err_content').html(msg+'&nbsp;<span style="cursor:pointer;;" onclick="hide_err_tip_panel()">✖</span>');
    $('#err_bg').css({'left':left+'px','top':tops+'px','display':''});
    var ew=document.getElementById('err_content').offsetWidth;
  	var bw=document.getElementById('err_bg').offsetWidth;
  	
  	if(bw<(ew+10))
  	{
  		document.getElementById('err_content').style.width=(bw-10)+'px';
  	}
    
    var err_height=$('#err_content').outerHeight();
    //$('#err_bg').css('height',err_height+'px');
    tops -=(err_height+45);
	$('#err_bg').css({'top':tops+'px','height':err_height+'px'});
	
    Aname('err_bg');	
}

function Aname(id)
{
	var aniID;//Aname函數專用
  	if(id!='' && document.getElementById(id))
	{
		var nh=document.documentElement.scrollTop+document.body.scrollTop;
		var sh=getElementPos(id).y;
		if(nh!=sh) //不等於現在高度時
		{	
			var st=nh-sh;
			if(st<0) 
			{
				st='add';	//往下
			}
			else 
			{
				st='cut';	//往上
			}
			aniID=setInterval('Aname_Run('+sh+',"'+st+'")',25);
		}
	}
}

function err_alert_panel(eid,msg)
{
  	show_toast('訊息通知',msg,'toast-top-center','warning',1000);
  	jQuery('#'+eid).focus(); 
}

function hide_err_tip_panel()
{
    $('#err_bg').css('display','none');
}

//-------------------------------------------------
//作用:輸入提示訊息
//參數:
//---------------------20161017-------------------------------
function write_tip(data)
{
    var mydata=data.split(',');
    var m=mydata.length;
    var i,j;
    for(i=0,j=1;i<m;i=i+2,j=j+2)
    { 
        document.getElementById(mydata[i]).onclick=new Function("click_tip_panel(this,'"+mydata[j]+"')");
    }
    if(!document.getElementById('tip_bg'))
    {
    	$('body').prepend('<div class="write_tip_bg" id="tip_bg" style="display:none;"><span id="tip_content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><div class="write_tip_arr"></div></div>');
    	if(window.PIE)
    	{
            $('.write_tip_bg').each(function()
            {
                PIE.attach(this);
            });
            $('.write_tip_arr').each(function()
            {
                PIE.attach(this);
            });
        }
    }
}

//-------------------------------------------------
//作用:顯示提示訊息
//參數:物件本身,訊息
//---------------------20161017-------------------------------
function click_tip_panel(obj,msg)
{
    var ptop=parseInt(document.documentElement.scrollTop)+document.body.scrollTop;
	var pleft=parseInt(document.documentElement.scrollLeft);
	var left=parseInt(obj.getBoundingClientRect().left)+pleft;
	var tops=parseInt(obj.getBoundingClientRect().top)+ptop;//obj.offsetHeight
	var brow=GetBrowName();
	if(brow=='msie')
	{
	    var iev=parseFloat(navigator.appVersion.split("MSIE")[1]);
	    if(iev<=7)
	    {
	      //修正ie7.6錯誤
	      left=left-2;
	      tops=tops-2;
	    }
	    if(iev<=9)
	    {
            $('.write_tip_arr').css({'display':'none'});
            tops +=3;
        }
	}
	tops -=30;
	$('#tip_content').html(msg+'&nbsp;<span style="cursor:pointer;color:#c00;" onclick="hide_tip_panel()">✖</span>');
    $('#tip_bg').css({'left':left+'px','top':tops+'px','display':''});
}

//-------------------------------------------------
//作用:關閉提示訊息
//參數:
//---------------------20161017-------------------------------
function hide_tip_panel()
{
    $('#tip_bg').css('display','none');
}

//---------------------2013.01.21-------------------------------
//說明：提示訊息
//輸入：
//-------------------------------------------------------------------------
var MyTipPanel = {
		
		_daid : new Array(),//儲存id資料
		_damsg : new Array(),//儲存訊息
		_run : false,//是否執行
		_time : 1000,//毫秒
		//設定時間 
		set_time : function(s)
		{
			this._time=s;
		},
		//設定資料
		set_data :function(da)
		{
			var tmp = da.split(',');
			var m=tmp.length;
			var i,j;
			for(i=0,j=1;i<m;i=i+2,j=j+2)
			{
				this._daid[this._daid.length]=tmp[i];
				this._damsg[this._damsg.length]=tmp[j];
			}
			MyTipPanel.create_tip();
		},
		//創建 
		create_tip : function()
		{
			//創建div
			var dd=document.createElement("div");
			dd.setAttribute('id','ntip');
			dd.className='tip_bg';
		    dd.innerHTML='<div class="tip_arr"></div><span id="ntip_content">123456</span>';
		    dd.style.display='none';

		    document.body.appendChild(dd);
		    //執行pie
		    if(typeof(PIE)!='undefined')
		    {
			    $('.tip_bg').each(function()
			    {
		            PIE.attach(this);
		        });
		        $('.tip_arr').each(function()
		        {
		            PIE.attach(this);
		        });
		    }
		},
		//執行資料顯示
		run_data:function()
		{
			
		},
		//執行一次
		run_one : function(id,msg)
		{
			if(!document.getElementById('ntip')) 
			{
				MyTipPanel.create_tip();
			}
			var obj=document.getElementById(id);
			var ptop=parseInt(document.documentElement.scrollTop)+document.body.scrollTop;
			var pleft=parseInt(document.documentElement.scrollLeft);
			var left=parseInt(obj.getBoundingClientRect().left)+pleft;
			var tops=parseInt(obj.getBoundingClientRect().top)+ptop;//obj.offsetHeight
			var brow=GetBrowName();
			if(brow=='msie')
			{
			    var iev=parseFloat(navigator.appVersion.split("MSIE")[1]);
			    if(iev<=7)
			    {
			      	//修正ie7.6錯誤
			      	left=left-2;
			      	tops=tops-2;
			    }
			    if(iev<=9)
			    {
		            $('.tip_arr').css({'display':'none'});
		            tops +=10;
		        }
			}
			tops -=30;
			$('#ntip_content').html(msg+'&nbsp;<span style="color:red;text-align:right;cursor:pointer;" onclick="MyTipPanel.hide_panel()">×</span>');
		    $('#ntip').css({'left':left+'px','top':tops+'px','display':''});
		},
		hide_panel : function()
		{
			$('#ntip').css('display','none');
		}
};