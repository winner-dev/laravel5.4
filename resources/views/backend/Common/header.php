<!doctype html>
<html lang="en">

<head>
	<meta charset="utf-8"/>
	<title><?php echo $this->WebcfgRow->sitename?> Dashboard I Admin Panel</title>
	<META HTTP-EQUIV="pragma" CONTENT="no-cache"> 
	<META HTTP-EQUIV="Cache-Control" CONTENT="no-cache, must-revalidate"> 
	<META HTTP-EQUIV="expires" CONTENT="0">
	<link rel="stylesheet" href="/asset/backend/css/layout.css" type="text/css" media="screen" />
	<!--[if lt IE 9]>
	<link rel="stylesheet" href="css/ie.css" type="text/css" media="screen" />
	<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
	<script src="/asset/backend/js/jquery-1.5.2.min.js" type="text/javascript"></script>
	<script src="/asset/backend/js/hideshow.js" type="text/javascript"></script>
	<script src="/asset/backend/js/jquery.tablesorter.min.js" type="text/javascript"></script>
	<script src="/asset/backend/js/jquery.equalHeight.js" type="text/javascript"></script>
	<script src="/include/ckeditor/ckeditor.js" type="text/javascript"></script>

	<link href="/asset/common/js/toast/toastr.css" rel="stylesheet" type="text/css" />
	<script src="/asset/common/js/toast/toastr.js"></script>
	<script src="/asset/common/js/common.js"></script>
	<script src="/asset/common/js/prompt.ori.js"></script>
	<script src="/asset/backend/js/news.js"></script>
	
	<script src="/asset/backend/js/product.js"></script>
	<script src="/asset/backend/js/webcfg.js"></script>
	<script src="/asset/backend/js/home_set.js"></script>
	<script src="/asset/backend/js/slide.js"></script>
	<script src="/asset/backend/js/files.js"></script>
	<script src="/asset/backend/js/permission.js"></script>
	
	<script type="text/javascript">
	$(document).ready(function() { 
      	$(".tablesorter").tablesorter(); 

      	//When page loads...
		$(".tab_content").hide(); //Hide all content
		$("ul.tabs li:first").addClass("active").show(); //Activate first tab
		$(".tab_content:first").show(); //Show first tab content

		//On Click Event
		$("ul.tabs li").click(function() {

			$("ul.tabs li").removeClass("active"); //Remove any "active" class
			$(this).addClass("active"); //Add "active" class to selected tab
			$(".tab_content").hide(); //Hide all tab content

			var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
			$(activeTab).fadeIn(); //Fade in the active ID content
			return false;
		});

      	if(document.getElementById('info')){
		    CKEDITOR.replace( 'info' ,{
		  	  toolbar : 'all'
		    });
		}

		if(document.getElementById('feature')){
		    CKEDITOR.replace( 'feature' ,{
		  	  toolbar : 'all'
		    });
		}

		if(document.getElementById('contact_content')){
		    CKEDITOR.replace( 'contact_content' ,{
		  	  toolbar : 'all'
		    });
		}

		if(document.getElementById('contact_info')){
		    CKEDITOR.replace( 'contact_info' ,{
		  	  toolbar : 'all'
		    });
		}

		if(document.getElementById('about_us')){
		    CKEDITOR.replace( 'about_us' ,{
		  	  toolbar : 'all'
		    });
		}

		
   	});

    </script>
    <script type="text/javascript">
    $(function(){
        $('.column').equalHeight();
    });
</script>

</head>


<body>

	<header id="header">
		<hgroup>
			<h1 class="site_title"><a href="javascript:void(0)"><?php echo $this->WebcfgRow->sitename?></a></h1>
			<h2 class="section_title"></h2>
			<div class="btn_view_site"><a href="/" target="new">前台檢視</a></div>
		</hgroup>
	</header> <!-- end of header bar -->


	