<section id="secondary_bar">
	<div class="user">
		<p><?=$this->session->BackendLoginSession['AdminName']?>  <!--(<a href="#">3 Messages</a>) --></p>
		<a class="logout_user" href="#" title="Logout" onclick="logout()">Logout</a>
	</div>
	<div class="breadcrumbs_container">
		<article class="breadcrumbs">
			<?php if($this->router->method=='Home'):?>
				<a href="/backend/Webcfg/Home">首頁</a> 
			<?php else:?>
				<a href="/backend/Webcfg/Home">首頁</a>
				<div class="breadcrumb_divider"></div>
				<?php if(isset($UpLayer0)):?>
					<?php if(isset($UpLayer)):?>
						<a href="/backend/<?php echo $this->router->class;?>/<?php echo $UpLayer0;?>" class="current"><?=lang('menu_'.$UpLayer0)?></a>

						<div class="breadcrumb_divider"></div>

						<a href="/backend/<?php echo $this->router->class;?>/<?php echo $UpLayer;?>/<?php echo $UpLayerID;?>" class="current"><?=lang('menu_'.$UpLayer)?></a>

						<div class="breadcrumb_divider"></div>

						<a class="current"><?=lang('menu_'.$this->router->method)?></a>
					<?php else:?>
						<a href="/backend/<?php echo $this->router->class;?>/<?php echo $UpLayer0;?>/<?php echo $UpLayerID;?>" class="current"><?=lang('menu_'.$UpLayer0)?></a>

						<div class="breadcrumb_divider"></div>

						<a class="current"><?=lang('menu_'.$this->router->method)?></a>
					<?php endif;?>	
				<?php else:?>	

					<?php if($UpLayer==''):?>
						<a class="current"><?=lang('menu_'.$this->router->method)?></a>
					<?php else:?>
						<a href="/backend/<?php echo $this->router->class;?>/<?php echo $UpLayer;?>" class="current"><?=lang('menu_'.$UpLayer)?></a>
						<div class="breadcrumb_divider"></div>
						<a class="current"><?=lang('menu_'.$this->router->method)?></a>
					<?php endif;?>
				<?php endif;#結束if isset?>	
			<?php endif;#結束if not home?>
		</article>
	</div>
</section><!-- end of secondary bar -->
	
<aside id="sidebar" class="column">
	<!--form class="quick_search">
		<input type="text" value="Quick Search" onfocus="if(!this._haschanged){this.value=''};this._haschanged=true;">
	</form>
	<hr/-->

	<div id="menulist"><h3>未授權</h3><ul class="toggle"></ul></div>
		
		
	<footer>
		<hr />
		<p><strong>Copyright &copy; 2016 ~ <?=date('Y')?></strong></p>
		<p>
			<?php echo 'Server 回應耗時	'	.	$this->benchmark->elapsed_time()	.	'秒';?>
			，
			<?php echo '記憶體使用量	'	.	$this->benchmark->memory_usage();?>
		</p>
	</footer>
</aside>



<script type="text/javascript">
<!--
$(function() 
{
	$.ajax({                   
        url: '/api/Backend/GetMenuList',
        type:'GET',   
        dataType: 'json',
        error: handleAjaxError, 
        success: function(data)
        {  
          //alert(data); 
          //alert(JSON.stringify(data)); 
          //$('.DataCenter:first').unblock(); 
          if(data.hasOwnProperty("result"))
          {
            var result  = JSON.stringify(data.result);
            if(result=='true')
            {
             	$('#menulist').html('');
             	var menu='';
             	var menu_res = JSON.parse(JSON.stringify(data.data));
             	for(i=0;i<menu_res.length;i++)
		      	{
		            menu += '<h3>'+menu_res[i].name+'</h3><ul class="toggle">';
		            //var item_menu='<ul class="toggle"></ul>';

		            var item_menu_res = JSON.parse(JSON.stringify(data.item_data));
	             	for(j=0;j<item_menu_res.length;j++)
			      	{
			      		if(menu_res[i].id==item_menu_res[j].upid)
			      		{
			      			var icn='new_article';
			      			if(item_menu_res[j].name=='後台登出')
			      			{
			      				var icn='jump_back';
			      			}
			      			menu += '<li class="icn_'+icn+'"><a href="/backend/'+item_menu_res[j].controller+'/'+item_menu_res[j].method+'">'+item_menu_res[j].name+'</a></li>';
			      		}
			      	}
			      	menu +='</ul>';
		            			
		        }
		        $('#menulist').html(menu);
		        
		        /*
		         *	20161006
		         *	右邊show 跟 hide 功能
		         *
		         */
		        var showText='Show';
				var hideText='Hide';
				var is_visible = false;
				$('.toggle').prev().append(' <a href="#" class="toggleLink">'+hideText+'</a>');
				$('.toggle').show();
				$('a.toggleLink').click(function() {

					is_visible = !is_visible;
					if ($(this).text()==showText) 
					{
						$(this).text(hideText);
						$(this).parent().next('.toggle').slideDown('slow');
					}
					else 
					{
						$(this).text(showText);
						$(this).parent().next('.toggle').slideUp('slow');
					}
					return false;
				});
			}
            else
            {
              show_toast('訊息通知',JSON.stringify(data.msg),'toast-bottom-left','error',1000); 
            }
          }
          else
          {
            show_toast('訊息通知','系統繁忙,請稍後再試','toast-bottom-left','error',1000); 
          }
        }
    });	
})


//-->
</script>


<section id="main" class="column">
		<!-- header message bar -->
		<?php if ($this->session->flashdata('alert_info')) : ?>
			<h4 class="alert_info">
				<?php echo $this->session->flashdata('alert_info')?>
			</h4>
		<?php endif; ?>
					
		<?php if ($this->session->flashdata('warning')) : ?>
			<h4 class="alert_warning">
				<?php echo $this->session->flashdata('warning')?>
			</h4>
		<?php endif; ?>

		<?php if ($this->session->flashdata('success')) : ?>
			<h4 class="alert_success">
				<?php echo $this->session->flashdata('success')?>
			</h4>
		<?php endif; ?>

		<?php if ($this->session->flashdata('error')) : ?>
			<h4 class="alert_error">
				<?php echo $this->session->flashdata('error')?>
			</h4>
		<?php endif; ?>
		<!-- end of header message bar -->

		<div class="clear"></div>

