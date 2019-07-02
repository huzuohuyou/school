Ext.define('manage.view.banner.Form', {
	extend : 'Ext.form.Panel',
	alias : 'widget.bannerform',
	requires : [ 'manage.view.ux.UEditor','manage.view.ux.ComboBox','manage.view.ux.PicField' ],
	bodyPadding : 10,
	header : false,
	buttonAlign : 'center',
	layout: {
        columns: 2,
        type: 'table'
    },
    id :'bannerform',
	border : false,
	initComponent : function() {
		var me = this;
		Ext.applyIf(me,{
			items : [ {
				xtype : 'textfield',
				name : 'title',
				fieldLabel : '标题',
				width : 400,
				colspan : 2,
				afterLabelTextTpl : required,
				emptyText : '必须填写页面标题',
				blankText : '此项为必填项',
				allowBlank : false
			},{
				xtype : 'textfield',
				fieldLabel : '上传图片',
				readOnly:true,
				//colspan : 1,
				name : 'f_name',
				afterLabelTextTpl : required,
				emptyText : '必须填写页面标题',
				blankText : '此项为必填项',
				allowBlank : false,
				width : 300
			},{
				xtype : 'container',
				width : 100,
				//colspan : 1,
				items : [
					{
						xtype : 'button',
						action : 'upload',
						handler : fileUpload,
						text : '浏览'
					}, {
						xtype : 'button',
						handler : function(button){
							
							button.up('form').form.findField('f_id').setValue('');
							button.up('form').form.findField('f_name').setValue('');
							button.up('form').form.findField('f_nameLink').setValue('');
						},
						text : '删除'
					}
				         ]
			},{
				xtype : 'displayfield',
				fieldLabel : '图片预览',
				//colspan : 1,
				colspan : 2,
				name : 'f_name_link',
				width : 400
			},{
				xtype : 'textfield',
				name : 'imgurl',
				colspan : 2,
				fieldLabel : '图片链接',
				width : 400	
			},{
				xtype : 'textarea',
				name : 'information',
				fieldLabel : '说明',
				colspan : 2,
				width : 400

			}, {
				xtype : 'hidden',
				name : 'f_id'
			}, {
				xtype : 'hidden',
				name : 'id'
			} ]
		});
		me.callParent(arguments);
	},
	buttons : [ {
		text : '确定',
		action : 'submit'
	}, {
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});
function fileUpload(button){
	var form = button.up('form');
	var old_file = form.getForm().findField('f_id').getValue();
	Ext.create('Ext.window.Window', {
		title : '上传文件',
		resizable : true,
		id : 'uploadFile',
		modal : true,
		layout : 'fit',
		items : [ {
			xtype : 'form',			
			bodyPadding : 10,
			header : false,
			buttonAlign : 'center',
			border : false,
			items : [{
						xtype : 'filefield',
						name : 'new_file',
						fieldLabel : '文件路径(最大5M)',
						labelWidth : 80,
						msgTarget : 'side',
						regex : /[\w-]+(\.(jpg|JPG|JPEG|jpeg|GIF|gif|BMP|bmp|PNG|png))$/ ,
						regexText : '文件格式错误！',
						allowBlank : false,
						anchor : '100%',
						afterLabelTextTpl : required,
						emptyText : '请选择上传文件',
						blankText : '此项为必填项',
						allowBlank : false,
						buttonText : '浏览'
					}, {
						xtype : 'textfield',
						hidden : true,
						name : 'old_file'
					}],
			buttons : [{
						text : '确定',
						handler : uploadFile
					}, {
						text : '关闭',
						handler : function() {
							this.up('window').close();
						}
					}]
		} ],
		autoShow : true
	});
	Ext.getCmp('uploadFile').down('form').getForm().findField('old_file').setValue(old_file);
};
function uploadFile(button) {
	var upLoadForm = button.up('form').getForm();
	var win = button.up('window');
	upLoadForm.submit({
		waitMsg : '正在上传数据,请等待...',
		clientValidation : true,
		url : 'system.do',
		params : {
			action : 'uploadFile'
		},
		success : function(form, action) {
			top.Ext.Msg.alert('上传成功', action.result.msg == null ? '上传成功'
					: action.result.msg, function() {
				var f_name = action.result.f_name;
				var f_id = action.result.f_id;
				//获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp  
			    var curWwwPath=window.document.location.href;  
			    //获取主机地址之后的目录，如： uimcardprj/share/meun.jsp  
			    var pathName=window.document.location.pathname;  
			    var pos=curWwwPath.indexOf(pathName);  
			    //获取主机地址，如： http://localhost:8083  
			    var localhostPaht=curWwwPath.substring(0,pos);  
			    //获取带"/"的项目名，如：/uimcardprj  
			    var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);  
			    //alert(localhostPaht+projectName);  
			    
				//alert(f_name.substring(f_name.indexOf(".")));
				var replyForm = Ext.getCmp('bannerform').form;
				replyForm.findField('f_name_link').setValue('<img wight=300 height=200 src='+localhostPaht+projectName+'/files/'+f_id +f_name.substring(f_name.indexOf("."))+' />');
				replyForm.findField('f_id').setValue(f_id);
				replyForm.findField('f_name').setValue(f_name);
				win.close();
			});
		},
		failure : function(form, action) {
			switch (action.failureType) {
			case Ext.form.action.Action.CLIENT_INVALID:
				top.Ext.Msg.alert('上传失败', '所填数据不符合要求，请检查后提交');
				break;
			case Ext.form.action.Action.CONNECT_FAILURE:
				top.Ext.Msg.alert('上传失败', '上传失败，请检查网络');
				break;
			case Ext.form.action.Action.SERVER_INVALID:
				top.Ext.Msg.alert('上传失败',
						action.result.msg == null ? '上传失败'
								: action.result.msg);
			}
		}
	});
}
