Ext.define('manage.view.ux.CoursesUploadForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.coursesuploadform',
	bodyPadding : 10,
	header : false,
	buttonAlign : 'center',
	border : false,
	initComponent : function() {
		var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
		var me = this;
		Ext.applyIf(me, {
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
								handler : function(button){
									var form = button.up('form');
									var win = button.up('window');
									form.getForm().submit({
										waitMsg : '正在上传数据,请等待...',
										clientValidation : true,
										url : 'system.do',
										params : {
											action : 'uploadCoursesFile'
										},
										success : function(cform, action) {
											top.Ext.Msg.alert('上传成功', action.result.msg == null ? '上传成功'
													: action.result.msg, function() {
												if(form.pform!=null&&Ext.getCmp(form.pform)){
													var url = action.result.url;
													Ext.getCmp(form.pform).setValue(url);
													if(Ext.getCmp('browseImage'))
										                Ext.getCmp('browseImage').getEl().dom.src = url;
												}
												win.close();
											});
										},
										failure : function(cform, action) {
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
							}, {
								text : '重置',
								handler : function() {
									this.up('form').getForm().reset();
								}
							}]
				});

		me.callParent(arguments);
	}

});