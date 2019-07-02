Ext.define('manage.view.ux.StudentUploadForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.studentuploadform',
	bodyPadding : 10,
	header : false,
	buttonAlign : 'center',
	border : false,
	initComponent : function() {
		var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
		var me = this;
		Ext.applyIf(me, {
					items : [{
						       xtype : 'mycombo',
						       store : Ext.create('manage.store.schools.Schools',{
							   autoLoad : {limit : 1000,start : 0}
						     }),
						       queryMode : 'local',
						       fieldLabel : '选择学校',
						       displayfield:'name',
						       labelAlign : 'right',
						       name : 'school',
						       editable : false,
						       allowBlank : false,
							   afterLabelTextTpl : required,
							   emptyText : '请选择学校',
							   width : 326,
					         },{
								xtype : 'filefield',
								name : 'new_file',
								fieldLabel : '文件路径',
								labelAlign : 'right',
								msgTarget : 'side',
								allowBlank : false,
								afterLabelTextTpl : required,
								emptyText : '请选择上传文件,最大5M',
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
								action : 'submit'
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