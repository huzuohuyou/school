Ext.define('manage.view.headteacher.AnnouncementForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.announcementform',
	requires : [ 'manage.view.ux.ComboBox','manage.store.ComboBox'],
	layout : {
		columns : 1,
		type : 'table'
	},
	bodyPadding : 10,
	header : false,
	buttonAlign : 'center',
	border : false,
	initComponent : function() {
		var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
		var me = this;
		Ext.applyIf(me, {
			items : [ {
				xtype : 'textfield',
				fieldLabel : '发送时间',
				name : 'time',
				value : (new Date()).Format("yyyy-MM-dd HH:mm:ss"),
				width : 400,
				readOnly : true
			},{
				xtype : 'textfield',
				fieldLabel : '标题',
				name : 'head',
				colspan : 2,
				width : 800,
				afterLabelTextTpl : required,
				emptyText : '必须填写标题',
				blankText : '此项为必填项',
				allowBlank : false,
				maxLength : 500,
				maxLengthText : '最多输入500个字符'
			}, {
				xtype : 'hidden',
				name : 'id'
			},{
				xtype : 'htmleditor',
				fieldLabel : '消息内容',
				name : 'text',
				colspan : 2,
				width : 800,
				height : 300,
				afterLabelTextTpl : required,
				emptyText : '必须填写标题',
				blankText : '此项为必填项',
				allowBlank : false
			}],
			buttons : [ {
				text : '确定',
				action:'submit'
			}, {
				text : '关闭',
				handler : function() {
					this.up('window').close();
				}
			} ]
		});

		me.callParent(arguments);
	}

});