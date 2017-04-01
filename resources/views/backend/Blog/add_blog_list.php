
		<form name="AddMediaReportFrom" id="AddMediaReportFrom" method="post" action="/backend/<?php echo $this->router->class;?>/<?php echo $this->router->method;?>_Save" enctype="multipart/form-data" style="display:inline;" onsubmit="return false;">
		<input type="hidden" id="id">
		<article class="module width_full">
			
				<div class="module_content">
					<fieldset>
						<label><input checked  type="radio" id="img_type_1" name="img_type" value="pict" onclick="ChgImgType(1)">主圖 使用圖檔 </label>
						<input type="file" id="pict" name="pict">
					</fieldset>
					<!--fieldset>
						<label>圖檔超連結 (注意開頭要加http://)</label>
						<input type="text" id="pict_url" name="pict_url">
					</fieldset-->

					<fieldset>
						<label><input type="radio" id="img_type_2" name="img_type" value="youtube" onclick="ChgImgType(2)">主圖 使用Youtube分享 </label>
						<input type="text" id="img_type_youtube" name="img_type_youtube" disabled>
          			</fieldset>

          			<fieldset>
						<label>(youtube分享URL 截圖)</label>
						<img src="/asset/backend/images/youtube_desc.JPG" width="480" height="105">
					</fieldset>

					<fieldset>
						<label>主旨</label>
						<input type="text" id="subject" name="subject">
					</fieldset>
					
					<fieldset>
						<label>簡述</label>
					</fieldset>
					<textarea id="sinfo" name="sinfo" cols="50" rows="5"></textarea>

					<fieldset>
						<label>內容</label>
					</fieldset>
					<textarea id="info" name="info" cols="50" rows="5"></textarea>
				</div>
			<footer>
				<div class="submit_link">
					<input type="submit" value="新增儲存" class="alt_btn" onclick="CheckNewsADD('AddMediaReportFrom')">
					<input type="submit" value="返回" onclick="location.href='/backend/<?php echo $this->router->class;?>/MediaReport'" style="color:red">
				</div>
			</footer>
		</article><!-- end of post new article -->
		</form>
		
	</section>




