<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<title>学生注册</title>
<link rel="stylesheet" href="resource/css/style.css" />
<script type="text/javascript" src="plugins/ext/ext-all-debug.js"></script>
<script type="text/javascript">
  Ext.Ajax.timeout = 1800000;
		Ext.data.proxy.Ajax.timeout = 1800000;
 function addOption(objSelectNow, txt, val) {   
            var objOption = document.createElement("OPTION");       // 使用W3C标准语法为SELECT添加Option   
            objOption.text = txt;                                                          //得到显示值
            objOption.value = val;                                                       //得到实际值
            objSelectNow.options.add(objOption);                              //把每一个option添加到select中
 }
  function changeArea(obj){
                 var selectNow = document.getElementById("school");
                 if(obj.value == 0){
                         for(var k=selectNow.length-1; k>=0; k--){    
                                selectNow.removeChild(selectNow.options[k]);     //这里一定要进行倒序删除
                         }
                        selectNow.options.add(new Option("请选择学校","0"));
                 }else{
                         Ext.Ajax.request({
                                 url:'queryAreaSchools.do',
                                 async : false,//同步执行
                                 params:{ 
                                           area:obj.value
                                  },
                                  success: function(result, request){ 
                                           var obj = Ext.decode(result.responseText);
                                           for(var k=selectNow.length-1; k>=0; k--){
                                                    selectNow.removeChild(selectNow.options[k]); 
                                            }
                                            var data =  eval(obj.data);
                                            for(var i=0; i<data.length; i++){
                                                    var id = data[i].id;
                                                    var name = data[i].name;
                                                    addOption(selectNow,name,id);
                                             }
                                   },
                                    failure: function (){
                                            Ext.Msg.alert('系统提示','访问服务器失败！'); 
                                   }
                             });
                    }
              }
function doRegist()
		{  
			var username = document.getElementById("username").value;
			var name = document.getElementById("name").value;
			var password =document.getElementById("password").value;
			var confirm_password =document.getElementById("confirm_password").value;
			var school = document.getElementById("school").value;
			if (username == ""){
			    alert('教育ID不可为空！');
			}
			else if(username.length != 8)
			{
			     alert('教育必须为8位数字！');
			}
			else if(name ==""){
			    alert('学生姓名不可为空！');
			}
			else if(password ==""){
			    alert('密码不可为空！');
			}
			else if(password != confirm_password)
			{
			    alert('两次输入密码不一致！');
			}
			else if(school =="" ||school == 0){
			    alert('学校不可为空！');
			}
			else {
			   Ext.Ajax.request({
			 		url : 'student_Regist.do',
					params : {
						username : username,
						password : password,
						name :name,
						school:school
					},
					success : function(result, request) {
						var obj = Ext.decode(result.responseText);
						if (obj.success == true) {
							alert('注册成功！'); 
							window.setTimeout("window.location='student_admin.jspx'",2000); 

						} else {
							alert('该教育ID已经存在，可以直接登录！'); 
							
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

<div class="register-container">
	<h1>阳光丽和</h1>
	
	<div class="connect">
		<p>欢迎您的注册.</p>
	</div>
	
	<form action="" method="post" id="registerForm">
		<div>
			<input type="text" name="username" id="username" class="username" placeholder="教育ID" autocomplete="off"/>
		</div>
		<div>
			<input type="text" name="name" id="name" class="name" placeholder="姓名" autocomplete="off"/>
		</div>
		<div>
			<input type="password" name="password" id="password" class="password" placeholder="输入密码" oncontextmenu="return false" onpaste="return false" />
		</div>
		<div>
			<input type="password" name="confirm_password" id="confirm_password" class="confirm_password" placeholder="再次输入密码" oncontextmenu="return false" onpaste="return false" />
		</div>
		<div>
			<select name = "area" id="area" placeholder="学校所在区" onchange = "changeArea(this);">
			  <option value="0">学校所在区</option>
			  <option value="1">海淀区</option>
			  <option value="2">朝阳区</option>
			  <option value="3">东城区</option>
			  <option value="4">西城区</option>
			  <option value="5">崇文区</option>
			  <option value="6">玄武区</option>
			  <option value="7">丰台区</option>
			  <option value="8">通州区</option>
			  <option value="9">石景山区</option>
			  <option value="10">门头沟区</option>
			  <option value="11">房山区</option>
			  <option value="12">顺义区</option>
			  <option value="13">昌平区</option>
			  <option value="14">怀柔区</option>
			  <option value="15">大兴区</option>
			  <option value="16">平谷区</option>
				
			 </select>
		</div>
		<div>
			<select name = "school" id="school" placeholder="学校名称">
			  <option value="0">请选择学校</option>
				
			 </select>
		</div>

		<button id="submit" type="button" onclick=doRegist();>注 册</button>
	</form>
	<a href="student_admin.jspx">
		<button type="button" class="register-tis">已经有账号？</button>
	</a>

</div>


<script src="resource/js/jquery.min.js"></script>
<script src="resource/js/common.js"></script>
<!--背景图片自动更换-->
<script src="resource/js/supersized.3.2.7.min.js"></script>
<script src="resource/js/supersized-init.js"></script>
<!--表单验证-->
<script src="resource/js/jquery.validate.min.js?var1.14.0"></script>

</body>
</html>
<!--
本代码由js代码收集并编辑整理;
尊重他人劳动成果;
转载请保留js代码链接 - www.jsdaima.com
-->