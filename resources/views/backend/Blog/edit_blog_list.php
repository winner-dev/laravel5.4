
		<form name="EditMediaReportFrom" id="EditMediaReportFrom" method="post" action="/backend/<?php echo $this->router->class;?>/<?php echo $this->router->method;?>_Save" enctype="multipart/form-data" style="display:inline;" onsubmit="return false;">
		<input type="hidden" id="id" name="id" value="<?php echo $row->id?>">
		<article class="module width_full">
			
			<div class="module_content">
				<fieldset>
					<label><input checked  type="radio" id="img_type_1" name="img_type" value="pict" onclick="ChgImgType(1)" <?php if($row->img_type=='pict')echo 'checked';?>>主圖 使用圖檔 </label>

					<?php if($row->img_type=='pict'):?>
						<IMG alt="" src="/include/timthumb.php?src=<?php echo $row->pict?>&h=100&w=200&zc=1">
						更新上傳<input type="file" id="pict" name="pict" <?php if($row->img_type!='pict')echo 'disabled';?>>
					<?php else:?>
						<input type="file" id="pict" name="pict" <?php if($row->img_type!='pict')echo 'disabled';?>>
					<?php endif;?>
				</fieldset>

				<!--fieldset>
					<label>圖檔超連結 (注意開頭要加http://)</label>
					<input type="text" id="pict_url" name="pict_url" <?php if($row->img_type!='pict' && $row->img_type!='')echo 'disabled';?> value="<?php echo $row->pict_url?>">
				</fieldset-->

				<fieldset>
					<label><input type="radio" id="img_type_2" name="img_type" value="youtube" onclick="ChgImgType(2)" <?php if($row->img_type=='youtube')echo 'checked';?>>主圖 使用Youtube分享 </label>
					<?php
			           if($row->pict!='')
			           {
			           		$path = explode('/',$row->pict);
			             	$code = $path[count($path)-1];
			           }
			        ?>
					<input type="text" id="img_type_youtube" name="img_type_youtube" <?php if($row->img_type!='youtube')echo 'disabled';?> value="<?php if($row->img_type=='youtube')echo $row->pict;?>">
          		</fieldset>

          		<fieldset>
					<label>(youtube分享URL 截圖)</label>
					<img src="/asset/backend/images/youtube_desc.JPG" width="480" height="105">
				</fieldset>

				<fieldset>
					<label>主旨</label>
					<input type="text" id="subject" name="subject" value="<?php echo $row->subject?>">
				</fieldset>

				<fieldset>
						<label>簡述</label>
					</fieldset>
					<textarea id="sinfo" name="sinfo" cols="50" rows="5"><?php echo $row->sinfo?></textarea>
						
				<fieldset>
					<label>內容</label>
				</fieldset>
				<textarea id="info" name="info" cols="50" rows="5"><?php echo $row->info?></textarea>
						
			</div>
			<footer>
				<div class="submit_link">
					<input type="submit" value="編輯儲存" class="alt_btn" onclick="CheckNewsEDIT('EditMediaReportFrom')">
					<input type="submit" value="返回" onclick="location.href='/backend/<?php echo $this->router->class;?>/blog_list.html'" style="color:red">
				</div>
			</footer>
		</article><!-- end of post new article -->
		</form>
		
	</section>




