
		<form name="EditSlideFrom" id="EditSlideFrom" method="post" action="/backend/<?php echo $this->router->class;?>/<?php echo $this->router->method;?>_Save" enctype="multipart/form-data" style="display:inline;" onsubmit="return false;">
		<input type="hidden" id="id" name="id" value="<?php echo $row->id?>">
		<article class="module width_full">
			
				<div class="module_content">
					
					<fieldset>
						<label>圖檔</label>
						<?php if($row->pict!=''):?>
							<img src="<?php echo $row->pict?>" style="height:150px;">
						<?php endif;?>
						更新：<input type="file" id="pict" name="pict">
					</fieldset>


					
				</div>
			<footer>
				<div class="submit_link">
					<input type="submit" value="編輯儲存" class="alt_btn" onclick="CheckSlideEDIT('EditSlideFrom')">
					<input type="submit" value="返回" onclick="location.href='/backend/<?php echo $this->router->class;?>/slide_list'" style="color:red">
				</div>
			</footer>
		</article><!-- end of post new article -->
		</form>
		
	</section>




