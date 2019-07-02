Ext.define('manage.view.bottom.Form', {
	extend : 'Ext.form.Panel',
	alias : 'widget.bottomform',
	requires : [ 'manage.view.ux.UEditor','manage.view.ux.ComboBox','manage.view.ux.PicField' ],
	bodyPadding : 10,
	header : false,
	buttonAlign : 'center',
	layout: {
        columns: 4,
        type: 'table'
    },
    id :'bottomform',
	border : false,
	initComponent : function() {
		var me = this;
		Ext.applyIf(me,{
			items : [ {
				xtype : 'textfield',
				name : 'img1_label',
				fieldLabel : '标签1',
				width : 400,
				colspan : 2,
				afterLabelTextTpl : required,
				emptyText : '必须填写页面标题',
				blankText : '此项为必填项',
				allowBlank : false
			},{
				xtype : 'textfield',
				name : 'img2_label',
				fieldLabel : '标签2',
				width : 400,
				colspan : 2,
				afterLabelTextTpl : required,
				emptyText : '必须填写页面标题',
				blankText : '此项为必填项',
				allowBlank : false
			},{
				xtype : 'textfield',
				fieldLabel : '上传图片1',
				readOnly:true,
				//colspan : 1,
				name : 'img1_fname',
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
						id : 'bimg1',
						action : 'upload',
						handler : fileUpload,
						text : '浏览'
					}, {
						xtype : 'button',
						handler : function(button){
							
							button.up('form').form.findField('img1_fid').setValue('');
							button.up('form').form.findField('img1_fname').setValue('');
							button.up('form').form.findField('img1_nameLink').setValue('');
						},
						text : '删除'
					}
				         ]
			},{
				xtype : 'textfield',
				fieldLabel : '上传图片2',
				readOnly:true,
				//colspan : 1,
				name : 'img2_fname',
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
						id : 'bimg2',
						action : 'upload',
						handler : fileUpload,
						text : '浏览'
					}, {
						xtype : 'button',
						handler : function(button){
							
							button.up('form').form.findField('img2_fid').setValue('');
							button.up('form').form.findField('img2_fname').setValue('');
							button.up('form').form.findField('img2_nameLink').setValue('');
						},
						text : '删除'
					}
				         ]
			},{
				xtype : 'displayfield',
				fieldLabel : '图片1预览',
				//colspan : 1,
				colspan : 2,
				name : 'img1_nameLink',
				width : 400
			},{
				xtype : 'displayfield',
				fieldLabel : '图片2预览',
				//colspan : 1,
				colspan : 2,
				name : 'img2_nameLink',
				width : 400
			},{
				xtype : 'textfield',
				name : 'address',
				colspan : 2,
				fieldLabel : '地址',
				width : 400	
			},{
				xtype : 'textfield',
				name : 'contact_user',
				colspan : 2,
				fieldLabel : '联系人',
				width : 400	
			},{
				xtype : 'textfield',
				name : 'phone',
				colspan : 2,
				fieldLabel : '电话',
				width : 400	
			},{
				xtype : 'textfield',
				name : 'backup',
				colspan : 2,
				fieldLabel : '京备号',
				width : 400	
			}, {
				xtype : 'hidden',
				name : 'img1_fid'
			}, {
				xtype : 'hidden',
				name : 'img2_fid'
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
	var old_file ;
	if(button.id =="bimg1"){
		old_file = form.getForm().findField('img1_fid').getValue();
	}else{
		old_file = form.getForm().findField('img2_fid').getValue();
	} 
		
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
					}, {
						xtype : 'textfield',
						hidden : true,
						name : 'button_id'
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
	Ext.getCmp('uploadFile').down('form').getForm().findField('button_id').setValue(button.id);
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
				var replyForm = Ext.getCmp('bottomform').form;
				var button_id = upLoadForm.findField('button_id').getValue();
				if(button_id =="bimg1"){
					replyForm.findField('img1_nameLink').setValue('<img wight=300 height=200 src='+localhostPaht+projectName+'/files/'+f_id +f_name.substring(f_name.indexOf("."))+' />');
					replyForm.findField('img1_fid').setValue(f_id);
					replyForm.findField('img1_fname').setValue(f_name);
				}else{
					replyForm.findField('img2_nameLink').setValue('<img wight=300 height=200 src='+localhostPaht+projectName+'/files/'+f_id +f_name.substring(f_name.indexOf("."))+' />');
					replyForm.findField('img2_fid').setValue(f_id);
					replyForm.findField('img2_fname').setValue(f_name);
				} 
				
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
