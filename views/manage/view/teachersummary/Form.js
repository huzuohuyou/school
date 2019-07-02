Ext.define('manage.view.teachersummary.Form', {
	extend : 'Ext.form.Panel',
	alias : 'widget.teachersummaryform',
	requires : [ 'manage.view.ux.ComboBox','manage.view.ux.UEditor' ],
	bodyPadding : 10,
	header : false,
	buttonAlign : 'center',
	layout : {
		columns : 1,
		type : 'table'
	},
	border : false,
	initComponent : function() {
		var me = this;
		Ext.applyIf(me,{
			items : [{
				xtype : 'mycombo',
				store : Ext.create('manage.store.teachersummary.Categories'),
				queryMode : 'local',
				width : 900,
				fieldLabel : '所属栏目',
				labelAlign : 'right',
				name : 'ssd_id',
				editable : false,
				afterLabelTextTpl : required,
				emptyText : '必须选择所教班级',
				blankText : '此项为必填项',
				allowBlank : false
			},
			{
				xtype : 'textfield',
				fieldLabel : '标题',
				width : 900,
				labelAlign : 'right',
				name : 'title',
				editable : false,
				afterLabelTextTpl : required,
				emptyText : '必须填写标题',
				maxLength : 50,
				maxLengthText : '最多输入50个字符'
			},
			{
				xtype : 'ueditor',
				fieldLabel : '期末总结',
				labelAlign : 'right',
				editable : false,
				afterLabelTextTpl : required,
				width : 900,
				height : 300,
				name : 'content'
			},
			{
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