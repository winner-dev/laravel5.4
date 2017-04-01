
		<form name="AddSlideFrom" id="AddSlideFrom" method="post" action="/backend/<?php echo $this->router->class;?>/<?php echo $this->router->method;?>_Save" enctype="multipart/form-data" style="display:inline;" onsubmit="return false;">
		<input type="hidden" id="id">
		<article class="module width_full">
			
				<div class="module_content">
					

					<fieldset>
						<label>圖檔</label>
						<input type="file" id="pict" name="pict">
					</fieldset>

					
					

					
				</div>
			<footer>
				<div class="submit_link">
					<input type="submit" value="新增儲存" class="alt_btn" onclick="CheckSlideADD('AddSlideFrom')">
					<input type="submit" value="返回" onclick="location.href='/backend/<?php echo $this->router->class;?>/slide_list'" style="color:red">
				</div>
			</footer>
		</article><!-- end of post new article -->
		</form>
		
	</section>




