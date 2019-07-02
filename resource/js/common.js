//打开字滑入效果
window.onload = function(){
	$(".connect p").eq(0).animate({"left":"0%"}, 600);
	$(".connect p").eq(1).animate({"left":"0%"}, 400);
};
//jquery.validate表单验证
$(document).ready(function(){
	//登陆表单验证
	$("#loginForm").validate({
		rules:{
			username:{
				required:true,//必填
				minlength:8, //最少6个字符
				maxlength:8,//最多20个字符
			},
			password:{
				required:true,
				minlength:3, 
				maxlength:32,
			},
		},
		//错误信息提示
		messages:{
			username:{
				required:"必须填写用户名",
				minlength:"用户名必须为8位数字",
				maxlength:"用户名必须为8位数字",
				remote: "用户名已存在",
			},
			password:{
				required:"必须填写密码",
				minlength:"密码至少为3个字符",
				maxlength:"密码至多为32个字符",
			},
		},

	});
	//注册表单验证
	$("#registerForm").validate({
		rules:{
			username:{
				required:true,//必填
				minlength:8, //最少6个字符
				maxlength:8,//最多20个字符
				username:true,
			},
			name:{
				required:true,//必填
				minlength:1, //最少6个字符
				maxlength:10,//最多20个字符
			},
			password:{
				required:true,
				minlength:3, 
				maxlength:32,
			},
			email:{
				required:true,
				email:true,
			},
			school:{
				required:true,
				school:true
			},
			confirm_password:{
				required:true,
				minlength:3,
				equalTo:'.password'
			},
			phone_number:{
				required:true,
				phone_number:true,//自定义的规则
				digits:true,//整数
			}
		},
		//错误信息提示
		messages:{
			username:{
				required:"必须填写用户名",
				minlength:"用户名必须为8位数字",
				maxlength:"用户名必须为8位数字",
				remote: "用户名已存在",
			},
			name:{
				required:"必须填写姓名",
				minlength:"姓名必须最少两位",
				maxlength:"姓名最多十位",
			},
			password:{
				required:"必须填写密码",
				minlength:"密码至少为3个字符",
				maxlength:"密码至多为32个字符",
			},
			email:{
				required:"请输入邮箱地址",
				email: "请输入正确的email地址"
			},
		
			confirm_password:{
				required: "请再次输入密码",
				minlength: "确认密码不能少于3个字符",
				equalTo: "两次输入密码不一致",//与另一个元素相同
			},
			phone_number:{
				required:"请输入手机号码",
				digits:"请输入正确的手机号码",
			},
		
		},
	});
	//添加自定义验证规则
	jQuery.validator.addMethod("phone_number", function(value, element) { 
		var length = value.length; 
		var phone_number = /^(((13[0-9]{1})|(15[0-9]{1}))+\d{8})$/ 
		return this.optional(element) || (length == 11 && phone_number.test(value)); 
	}, "手机号码格式错误"); 
	//添加自定义验证规则
	jQuery.validator.addMethod("username", function(value, element) { 
		var length = value.length; 
		var username = /^\d{8}$/ 
		return this.optional(element) || (length == 8 && username.test(value)); 
	}, "教育ID必须是8位数字"); 
	//添加自定义验证规则
	jQuery.validator.addMethod("school", function(value, element) { 
		return this.optional(element) || (value != 0 && school.test(value)); 
	}, "必须选择学校"); 
});
