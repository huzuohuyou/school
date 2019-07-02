<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<HTML xmlns="http://www.w3.org/1999/xhtml">
<HEAD>
<TITLE>工作人员登录</TITLE>
<style type="text/css">
.css1 {
	font-family: "华文细黑";
	font-size: 14px;
	color: #09C;
}
</style>

<link rel="stylesheet" href="${sys.webRoot}/resource/css/login.css">
<script type="text/javascript" src="plugins/ext/ext-all-debug.js"></script>
<script type="text/javascript" src="plugins/jquery/jquery-1.9.1.min.js"></script>
<META http-equiv=Content-Type content="text/html; charset=utf-8">
<SCRIPT language=javascript>
		$(function(){         
			$('#kaptchaImage').click(function () {//生成验证码  
				$(this).hide().attr('src', './kaptcha/getKaptchaImage.do?' + Math.floor(Math.random()*100) ).fadeIn();  
			});
			loadCookies();  
		});   
		function changeCode() {  
			$('#kaptchaImage').hide().attr('src', './kaptcha/getKaptchaImage.do?' + Math.floor(Math.random()*100) ).fadeIn();  
		}  
		Ext.Ajax.timeout = 1800000;
		Ext.data.proxy.Ajax.timeout = 1800000;
		function onChgAuth()
		{
		  var imgsrc = document.getElementById("imgauthcode");
		  imgsrc.src = "kaptcha/getKaptchaImage.do?rnd=" + Math.random();
		}
		function doLogin()
		{  
			var msg = Ext.getDom('showmsg');
			var username = Ext.getDom('username').value;
			var password = Ext.getDom('password').value;
			var ckCookie = Ext.getDom('ckCookie').checked;
			var kaptcha  =  Ext.getDom('kaptcha').value;
			msg.innerHTML = '';
			if (username == "") {
				msg.innerHTML = '用户名不能为空！';
				Ext.getDom('username').focus();
			} else if (password == "") {
				msg.innerHTML = '密码不能为空！';
				Ext.getDom('password').focus();
			} else if (kaptcha == "") {
				msg.innerHTML = '验证码不能为空！';
				Ext.getDom('kaptcha').focus();
			} else {
				msg.innerHTML = '登陆中，请稍候……';
				Ext.Ajax.request({
					url : 'login.do',
					params : {
						loginName : username,
						password : password,
						ckCookie : ckCookie,
						kaptcha : kaptcha
					},
					success : function(result, request) {
						var obj = Ext.decode(result.responseText);
						if (obj.success == true) {
						   
							msg.color = 'blue';
							msg.innerHTML = '登录成功！';
		                    if(password =="123456"){
		                      window.location.href = 'updatePassword.jspx?loginName='+username;
		                    } 
		                    else
		                    {
							  window.location.href = 'manage.jspx';
							}
						} else {
							msg.innerHTML = obj.errors.errorString;
							if(obj.errors.errorString=="密码错误！")
							{
								Ext.getDom('password').value="";
								Ext.getDom('password').focus();
							}
							else if(obj.errors.errorString=="验证码错误！")
							{
								Ext.getDom('kaptcha').value="";
								Ext.getDom('kaptcha').focus();
							}
							changeCode();
							
						}
					},
					failed : function(request) {
						msg.innerHTML = '访问服务器失败！';
					}
				});
			}
		}
		function keyPress(evt) {
			evt = (evt) ? evt : ((window.event) ? window.event : "");
			if (evt.keyCode == '13') {
				doLogin();
				return false;
			}
			return true;
		}
		function loadCookies() {
			Ext.getDom('username').focus();
			var acookie = document.cookie.split(";");
			var defaultCookie = false;
			for ( var i = 0; i < acookie.length; i++) {
				var arr = acookie[i].split("=");
				if (arr[0].trim() == 'username' && arr[1].trim() != 'noBoss') {
					Ext.getDom('username').value = unescape(arr[1]);
					defaultCookie = true;
				}
				if (arr[0].trim() == 'password' && arr[1].trim() != 'noBoss') {
					Ext.getDom('password').value = unescape(arr[1]);
					defaultCookie = true;
				}
			}
			if (defaultCookie)
				Ext.getDom('ckCookie').checked = true;
		}
		
</SCRIPT>

<META content="MSHTML 6.00.6000.16809" name=GENERATOR>
</HEAD>
<BODY onkeypress=keyPress();>

<div class="width100">
	<div class="boxbg">
    	<!--logo二维码联系电话 -->
    	<div class="logo-left">
       	  <div class="logo"><img src="${sys.webRoot}/resource/images/login/logo.png"></div>
          <div class="ewm">
          		<table width="300" border="0" align="center" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center"><img src="${sys.webRoot}/resource/images/login/gzh.jpg" /><br/>关注公众号</td>
                    <td  align="center"><img src="${sys.webRoot}/resource/images/login/weixin.jpg" /><br/>扫码关注阳光丽和微信</td>
                  </tr>
                </table>
          </div>
            <div class="tell">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td width="44%" align="right" valign="middle"><img src="${sys.webRoot}/resource/images/login/tell.png" width="21" height="22"></td>
                  <td width="56%"  valign="middle">段老师 电话：18500320040 </td>
                </tr>
              </table>
            </div>
        </div>
        
        <FORM id=theform name=theform action= method=post>
        <!--登录内容 -->
    	<div class="logo-right">
        <table border="0" cellspacing="0"  cellpadding="0" width="450" height="474" >
          <tr>
            <td height="64" colspan="2" align="center" valign="middle" ><table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td width="44%" height="60" align="right"><img src="${sys.webRoot}/resource/images/login/man.png" width="31" height="31"></td>
                <td width="56%">&nbsp;&nbsp;&nbsp;&nbsp;<span class="f18636363">工作人员登录</span></td>
              </tr>
            </table>              <div class="close"><img src="${sys.webRoot}/resource/images/login/colse.png" /></div></td>
          </tr>
          
           <tr>
          <td width="44%" height="60" align="center">
           <font id="showmsg" color="red"></td>
           </tr>
          <tr>
          
          <tr>
            <td height="60" colspan="2" align="center" valign="bottom">
            	<input type="text" onKeyPress="keyPress(event);" id=username maxLength=20 name=username placeholder="请输入用户名或手机号" class="input2"/>
            	
            </td>
          </tr>
          
          <tr>
            <td height="66" colspan="2" align="center">
            	
            	<input type="password" onKeyPress="keyPress(event);" id=password name=password placeholder="密码" class="input2"/>
            	
            </td>
          </tr>
          
          
          <tr>
            <td width="54%" height="62" align="right" valign="top">
            	
            	<input type="text" onKeyPress="keyPress(event);" maxLength=4 id=kaptcha name="kaptcha" placeholder="验证码" class="input3"/>
            	
            </td>
            
            <td width="46%" align="left" valign="top" style="padding-left:5px;">
            	<IMG id=kaptchaImage style=" display: inline; margin-bottom: -10px; padding:0px 0px 20px 8px;" 
      	onclick=changeCode(); src="${sys.webRoot}/kaptcha/getKaptchaImage.do"  width="129" height="42"> 
            	
            	
            </td>
          </tr>
          <tr>
            <td align="left" style="padding-left:65px;">
            	<INPUT type="checkbox" name="ckCookie" id='ckCookie'> 记住我
            </td>
            
          </tr>
          <tr>
            <td height="108" colspan="2" align="center">
            <input  id=IbtnEnter name=IbtnEnter onclick=doLogin(); value="登录"  class="input4"/>
           
            </td>
          </tr>
          <tr>
          <td>
           <font id="showmsg" color="red"></td>
           </tr>
          <tr>
            <td height="57" colspan="2" align="center" class="f12c3c3c3" >版权报有：北京阳光丽和有限公司</td>
          </tr>
        </table>
    	</div>
    	
    	</FORM>
    	
  </div>
</div>





    
    </FORM></BODY></HTML>
