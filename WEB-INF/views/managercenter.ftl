<html>
<head>
	<link rel="stylesheet" href="resources/css/person.css" type="text/css">
	<script type="text/javascript" src="resources/js/acss.js"></script>
	<script type="text/javascript">
function blinklink()
{
if (!document.getElementById('blink').style.color)
 {
 document.getElementById('blink').style.color="red"
 }
if (document.getElementById('blink').style.color=="red")
 {
 document.getElementById('blink').style.color="black"
 }
else
 {
 document.getElementById('blink').style.color="red"
 }
timer=setTimeout("blinklink()",300)
}

function stoptimer()
{
clearTimeout(timer)
}
</script>
</head>
<body onload="blinklink()" onunload="stoptimer()">
	<div id="contents">
		<div id="adbox">
			<div class="clearfix">
				<img src="resources/images/logo4.png" alt="Img" height="200" width="594">
				<div class="detail">
					<h2>${user.getName()} 您好： </h2>
					<h3>欢迎登录阳光丽和课后一小时管理平台<br> Welcome to use this system.</h3>
				</div>
			</div>
		</div>
		
		<div class="featured">
			<h2></h2>
			<ul class="clearfix">
			    <li>
					
					<p>
						<b>公司简介</b><br>北京阳光丽和教育科技有限公司是一家提供青少年校外实践活动解决方案的专业机构，是北京市及海淀区教委正式授权的课外活动培训单位，社会大课堂单位。阳光丽和依托于海淀区课外教育体系，一直致力于青少年综合素质教育的实践、推广和体验教育，为北京以及全国的青少年提供特色课程、主题式冬夏令营、心理教育、安全教育、素养提升、军训、社会实践等丰富多彩并具有鲜明主题特征的校外实践活动。
					</p>
					
				</li>
				<li>
					
					<p>
						<b>管理须知</b><br> 每月信息维护审查两次，每月的15号和25号，检查内容：信息的维护、人员基本信息必填项的维护、学生管理的维护、教师管理的维护、学校新闻公告的维护等。
					</p>
					
				</li>
				<li>
					<p>
						<b>调课申请</b><br>
					</p>
					<p id="blink">
					 <#list dispatchapprove as item>	    	
							[新的调课申请]·<a href="javascript:getDispatchapprove('${item.t_name}','${item.school_name}','${item.c_name}','${item.s_name}','${item.week}','${item.writetime}')"style="color:black;font-weight:bold;font-family:""微软雅黑;"><span><b>${item.writetime}</b></span></a>
				     </#list>	
					</p>
				</li>
				<li>
					
					<p>
						<b>排课业务</b> 
					</p>
				    <p id="blink1">
				       <#list pre_courses as item>
							[排课提醒]·<a href="javascript:getPre_courses('${item.name}','${item.warntime}','${item.school_name}','${item.charger_name}')"style="color:black;font-weight:bold;font-family:""微软雅黑;"><span><b>${item.school_name}</b></span></a>
						 </#list>	
				     </p>	
				</li>
			</ul>
		</div>
	</div>
	</body>
</html>