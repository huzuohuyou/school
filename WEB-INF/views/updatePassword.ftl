<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
    <head>
        <title>修改密码</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="description" content="Expand, contract, animate forms with jQuery wihtout leaving the page" />
        <meta name="keywords" content="expand, form, css3, jquery, animate, width, height, adapt, unobtrusive javascript"/>
		<link rel="shortcut icon" href="../favicon.ico" type="image/x-icon"/>
        <link rel="stylesheet" type="text/css" href="${sys.webRoot}/resource/css/password_style.css" />
		<script src="${sys.webRoot}/resource/js/cufon-yui.js" type="text/javascript"></script>
		<script src="${sys.webRoot}/resource/js/ChunkFive_400.font.js" type="text/javascript"></script>
		<script type="text/javascript" src="plugins/ext/ext-all-debug.js"></script>
		<script type="text/javascript">
			Cufon.replace('h1',{ textShadow: '1px 1px #fff'});
			Cufon.replace('h2',{ textShadow: '1px 1px #fff'});
			Cufon.replace('h3',{ textShadow: '1px 1px #000'});
			Cufon.replace('.back');
			
			function doRegist()
		{  
			var passwordNew = document.getElementById("passwordNew").value;
			var passwordAgain = document.getElementById("passwordAgain").value;
			var username = window.location.href.split('?')[1].split('=')[1]; 
		    var regex = /^[a-z0-9A-Z]+$/;
			if (passwordNew == ""){
			    alert('必须输入新的密码');
			}
			else if(passwordAgain == "")
			{
			     alert('必须确认新密码！');
			}
			else if(passwordNew != passwordAgain){
			    alert('两次输入的密码不一致！');
			}
			else if(passwordNew.length<8||passwordNew.length>30){
			    alert('密码长度必须介于8位到30位之间！');
			}
			else if(!regex.test(passwordNew)){
                alert("密码必须是数字和字母的组合!");
            } 
			else if(passwordNew == passwordAgain && passwordNew =="123456"){
			    alert('修改的密码不可为初始密码！');
			}
			else {
			alert(passwordNew);
			   Ext.Ajax.request({
			 		url : 'password_update_new.do',
					params : {
						passwordNew : passwordNew,
						passwordAgain : passwordAgain,
						username:username
					},
					success : function(result, request) {
						var obj = Ext.decode(result.responseText);
						if (obj.success == true) {
							alert('修改密码成功！'); 
							window.setTimeout("window.location='manage.jspx'",2000); 

						} else {
							alert('修改密码失败！'); 
							
						}
					},
					failed : function(request) {
						alert('访问服务器失败！'); 
					}
				});
			}
		}
		</script>
    </head>
    <body>
		<div class="wrapper">
			
			<div class="content">
				<div id="form_wrapper" class="form_wrapper">
					<form class="login active">
						<h3>修改密码</h3>
						<div>
							<label>新密码:</label>
							<input type="password" id="passwordNew" />
						</div>
						<div>
							<label>确认新密码:</label>
							<input type="password" id="passwordAgain" />
						</div>
						<div class="bottom">
							<input type="button" onclick=doRegist(); value="确认修改"></input>
							<div class="clear"></div>
						</div>
					</form>
				</div>
				<div class="clear"></div>
			</div>
		</div>

		<!-- The JavaScript -->
		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
		<script type="text/javascript">
			$(function() {
					//the form wrapper (includes all forms)
				var $form_wrapper	= $('#form_wrapper'),
					//the current form is the one with class active
					$currentForm	= $form_wrapper.children('form.active'),
					//the change form links
					$linkform		= $form_wrapper.find('.linkform');
						
				//get width and height of each form and store them for later						
				$form_wrapper.children('form').each(function(i){
					var $theForm	= $(this);
					//solve the inline display none problem when using fadeIn fadeOut
					if(!$theForm.hasClass('active'))
						$theForm.hide();
					$theForm.data({
						width	: $theForm.width(),
						height	: $theForm.height()
					});
				});
				
				//set width and height of wrapper (same of current form)
				setWrapperWidth();
				
				/*
				clicking a link (change form event) in the form
				makes the current form hide.
				The wrapper animates its width and height to the 
				width and height of the new current form.
				After the animation, the new form is shown
				*/
				$linkform.bind('click',function(e){
					var $link	= $(this);
					var target	= $link.attr('rel');
					$currentForm.fadeOut(400,function(){
						//remove class active from current form
						$currentForm.removeClass('active');
						//new current form
						$currentForm= $form_wrapper.children('form.'+target);
						//animate the wrapper
						$form_wrapper.stop()
									 .animate({
										width	: $currentForm.data('width') + 'px',
										height	: $currentForm.data('height') + 'px'
									 },500,function(){
										//new form gets class active
										$currentForm.addClass('active');
										//show the new form
										$currentForm.fadeIn(400);
									 });
					});
					e.preventDefault();
				});
				
				function setWrapperWidth(){
					$form_wrapper.css({
						width	: $currentForm.data('width') + 'px',
						height	: $currentForm.data('height') + 'px'
					});
				}
				
				/*
				for the demo we disabled the submit buttons
				if you submit the form, you need to check the 
				which form was submited, and give the class active 
				to the form you want to show
				*/
				$form_wrapper.find('input[type="submit"]')
							 .click(function(e){
								e.preventDefault();
							 });	
			});
        </script>
    </body>
</html>