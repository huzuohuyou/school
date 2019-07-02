<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>阳光丽和课后一小时管理平台</title>
<link rel="stylesheet" type="text/css"
	href="plugins/ext/resources/css/ext-all.css" />
<link rel="stylesheet" type="text/css" href="resources/css/icons.css" />
<link rel="stylesheet" type="text/css" href="resources/css/ux.css" />
<script type="text/javascript" src="plugins/ext/ext-all-debug.js"></script>
<script type="text/javascript" src="plugins/ext/locale/ext-lang-zh_CN.js"></script>
<script type="text/javascript" src="views/manage/manage.js"></script>
<script type="text/javascript" src="resources/js/base.js"></script>
<script type="text/javascript" src="resources/js/renderer.js"></script>
<script type="text/javascript" src="resources/js/vtypes.js"></script>
<script type="text/javascript" src="plugins/jquery/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="plugins/ueditor1_4_3/ueditor.config.js"></script>
<script type="text/javascript" src="plugins/ueditor1_4_3/ueditor.all.min.js"></script>
<script type="text/javascript" src="plugins/ueditor1_4_3/ueditor.parse.min.js"></script>
<script type="text/javascript">
UEDITOR_HOME_URL = '${sys.webroot}/plugins/ueditor1_4_3/';
function goIndex() {
	top.location.href='${sys.webRoot}';
}
function changeTheme(combo, records, eOpts ) {
	var theme = records[0].data.id;
	var	url = "plugins/ext/resources/css/ext-all"+theme+".css";
	Ext.util.CSS.swapStyleSheet("theme", url);
}

function getAnnouncement(head, time, text ) {
	Ext.create('Ext.window.Window', {
						title : '查看公告',
						bodyPadding : 10,
						header : false,
						buttonAlign : 'center',
						layout: {
					        columns: 1,
					        type: 'table'
					    },
						border : false,
						items : [ {
							xtype : 'displayfield',
							name : 'head',
							fieldLabel : '公告标题',
							value : head
						},{
							xtype : 'displayfield',
							fieldLabel : '发布时间',
							name : 'time',
							value :time
						},{
							xtype : 'displayfield',
							fieldLabel : '公告内容',
							autoScroll : true,
							header : false,
							border : false,
							height :400,
							width : 900,
							name : 'text',
							value : text
						}],
						buttons : [{
							text : '关闭',
							handler : function() {
								this.up('window').close();
							}
						}],
						autoShow : true
					});
					
}
function getHomeWork( t_name, date,course_name, content ) {
	Ext.create('Ext.window.Window', {
						title : '查看作业',
						bodyPadding : 10,
						header : false,
						buttonAlign : 'center',
						layout: {
					        columns: 1,
					        type: 'table'
					    },
						border : false,
						items : [ {
							xtype : 'displayfield',
							name : 'date',
							fieldLabel : '日期',
							value : date
						},{
							xtype : 'displayfield',
							fieldLabel : '科目',
							name : 'course_name',
							value :course_name
						},{
							xtype : 'displayfield',
							fieldLabel : '教师',
							name : 't_name',
							value :t_name
						},{
							xtype : 'displayfield',
							fieldLabel : '作业内容',
							autoScroll : true,
							header : false,
							border : false,
							height :400,
							width : 900,
							name : 'content',
							value : content
						}],
						buttons : [{
							text : '关闭',
							handler : function() {
								this.up('window').close();
							}
						}],
						autoShow : true
					});
					
}
function getMessage(title, sendername, date, content ) {
	Ext.create('Ext.window.Window', {
						title : '查看邮件',
						bodyPadding : 10,
						header : false,
						buttonAlign : 'center',
						layout: {
					        columns: 1,
					        type: 'table'
					    },
						border : false,
						items : [ {
							xtype : 'displayfield',
							name : 'title',
							fieldLabel : '邮件标题',
							value : title
						},{
							xtype : 'displayfield',
							fieldLabel : '发送人',
							name : 'sendername',
							value :sendername
						},{
							xtype : 'displayfield',
							fieldLabel : '发送时间',
							name : 'date',
							value :date
						},{
							xtype : 'displayfield',
							fieldLabel : '邮件内容',
							autoScroll : true,
							header : false,
							border : false,
							height :400,
							width : 900,
							name : 'content',
							value : content
						}],
						buttons : [{
							text : '关闭',
							handler : function() {
								this.up('window').close();
							}
						}],
						autoShow : true
					});
					
}
Ext.onReady(function(){
	Ext.Ajax.on('requestexception',function(conn,response,options) {  
    if(response.status == '999'){       
        Ext.Msg.alert('提示', '您长时间未使用系统，已经自动退出，请重新登录!', function(btn, text){     
            if (btn == 'ok'){     
                window.location = 'student_admin.jspx';     
            }     
        });     
     }       
	}); 
	//Ext.BLANK_IMAGE_URL = 'js/ext/resources/images/default/s.gif';
	Ext.QuickTips.init();
});
	var webRoot = '${sys.webRoot}';
	var session = {
		id : '${userInfo.id}',
		loginname : '${userInfo.loginName}',
		password : '${userInfo.passWord}',
		name : '${userInfo.name}',
		role_id : '${userInfo.roleId}',
		authority : '${userInfo.authority}'.split(',')
	};
	function reLogin() {
		Ext.Ajax.request({
			url : 'logout.do'
		});
		location.replace('student_admin.jspx');
	}
</script>

</head>
<body>
</body>
</html>