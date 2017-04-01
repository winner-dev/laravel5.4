


	<form name="form1" id="form1" action="" method="post" enctype="multipart/form-data" style="display:inline;" onsubmit="return false;">
	<article class="module width_full">
		<header>
		<h3 class="tabs_involved">
			<input type="checkbox" id="mm" name="amm" onclick="checkAll(this,'mm')">全選	
		</h3>
		<ul class="tabs">
			<?php if($DelPermission['result']==true):?>
			<li>
   				<a href="#tab1" style="color:red" type="button" onclick="Sellistda(this,'mm','<?php echo $table?>')">全選刪除</a>
   			</li>
   			<?php endif;?>
	   			
   			<?php if($AddPermission['result']==true):?>
    		<li><a href="/backend/<?php echo $this->router->class;?>/add_<?php echo $this->router->method;?>" style="color:blue">新增資料</a></li>
    		<?php endif;?>
		</ul>
		</header>
		<div class="tab_container">
			<div id="tab1" class="tab_content">
				<table class="tablesorter" cellspacing="1"> 
					<thead> 
						<tr> 
		   					<th style="width:5px;"></th> 
		    				<th style="width:150px;">建檔時間</th>
		    				<th>主題名稱</th> 
		    				<th style="width:100px;">動作</th> 
						</tr> 
					</thead> 
					<tbody> 
						<?php if($res!=''):foreach($res as $row):?>
						<tr> 
		   					<td>
		   						<input type="checkbox" id="mm" name="mm" value="<?php echo $row->id?>">
		   					</td> 
		    				<td><?php echo $row->createtime?></td> 
		    				<td><?php echo $row->subject?></td> 
		    				<td>
		    					<?php if($EditPermission['result']==true):?>
		    					<input type="image" src="/asset/backend/images/icn_edit.png" title="編輯" onclick="location.href='/backend/<?php echo $this->router->class;?>/edit_<?php echo $this->router->method;?>/<?php echo $row->id?>.html'">
		    					<?php endif;?>

		    					<?php if($DelPermission['result']==true):?>
		    					<input type="image" src="/asset/backend/images/icn_trash.png" title="刪除" onclick="DeleteSingle('<?php echo $table?>',<?php echo $row->id?>)">
		    					<?php endif;?>
		    				</td> 
						</tr> 
						<?php endforeach;endif;?>
					</tbody> 
				</table>
			</div>
		</div>
	</article>
	</form>
	<?php echo $pagebar;?>
</section>



