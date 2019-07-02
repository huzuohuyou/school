Ext.define('manage.view.zhsjactivity.Form', {
	extend : 'Ext.form.Panel',
	alias : 'widget.zhsjform',
	requires : [ 'manage.view.ux.ComboBox', 'manage.view.ux.ComboBoxTree',
		'manage.view.ux.PicField', 'manage.view.ux.FileUploadForm','manage.view.ux.CheckComboBox'],
	bodyPadding : 10,
	//header : false,
	buttonAlign : 'center',
	layout : {
		columns : 1,
		type : 'table'
	},
	id : 'zhsjform',
	border : false,
	initComponent : function() {
		var me = this;
		Ext.applyIf(me,{
			items : [ {
				xtype : 'textfield',
				name : 'title',
				fieldLabel : '标题',
				width : 400,
				maxLength: 20,
		        maxLengthText: "最长为20个字符",
				afterLabelTextTpl : required,
				emptyText : '必须填写',
				blankText : '此项为必填项',
				allowBlank : false
			}, {
				xtype : 'numberfield',
				name : 'xcdays',
				fieldLabel : '行程天数',
				width : 400,
				
				afterLabelTextTpl : required,
				emptyText : '必须填写',
				blankText : '此项为必填项',
				allowBlank : false
			},  {
				xtype : 'mycombo',
				store : Ext.create('manage.store.zhsjactivity.ZhsjType'),
				queryMode : 'local',
				width : 400,
				fieldLabel : '活动类别',
				name : 'zhsjtype',
				editable : false,
				afterLabelTextTpl : required,
				emptyText : '必须选择',
				blankText : '此项为必填项',
				allowBlank : false
			},{
				xtype : 'checkcombo',
				fieldLabel : '适合年级',
				width : 400,
				
				displayfield:'name',
				name : 'grade',
				editable:false,
				emptyText : '必须选择',
				blankText : '此项为必填项',
				allowBlank : false,
				store:[["小学","小学"],["初中","初中"],["高中","高中"]]
			},{
				
				xtype : 'hidden',
				name : 'f_name'
			},{
				xtype : 'textfield',
				fieldLabel : '活动详情',
				name : 'f_nameLink',
				readOnly:true,
				
				colspan : 1,
				width : 400
			}, {
				xtype : 'hidden',
				name : 'f_id',
				
			}, {
				xtype : 'hidden',
				name : 'id',
			},{
				xtype : 'container',
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
	} ],
	
	
	
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
				var replyForm = Ext.getCmp('zhsjform').form;
			//	replyForm.findField('f_nameLink').setValue('<a target="_blank" href=system.do?action=downloadFile&f_id='+f_id+'>'+f_name+'</a>');
				replyForm.findField('f_id').setValue(f_id);
				replyForm.findField('f_name').setValue(f_name);
				replyForm.findField('f_nameLink').setValue(f_name);
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