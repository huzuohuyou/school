Ext.define('manage.view.activitytype.Form', {
	extend : 'Ext.form.Panel',
	alias : 'widget.activitytypeform',
	requires : [ 'manage.view.ux.ComboBox', 'manage.view.ux.ComboBoxTree'],
	bodyPadding : 10,
	//header : false,
	buttonAlign : 'center',
	layout : {
		columns : 1,
		type : 'table'
	},
	id : 'activitytypeform',
	border : false,
	initComponent : function() {
		var me = this;
		Ext.applyIf(me,{
			items : [ {
				xtype : 'mycombo',
				store:[["研学活动","研学活动"],["综合实践","综合实践"],["其他活动","其他活动"]],
				queryMode : 'local',
				width : 400,
				fieldLabel : '一级类别',
				name : 'p_id',
				editable : false,
				afterLabelTextTpl : required,
				emptyText : '必须选择',
				blankText : '此项为必填项',
				allowBlank : false
			},{
				xtype : 'textfield',
				name : 'name',
				fieldLabel : '类别名称',
				width : 400,
				maxLength: 20,
		        maxLengthText: "最长为20个字符",
				afterLabelTextTpl : required,
				emptyText : '必须填写',
				blankText : '此项为必填项',
				allowBlank : false
			},{
				xtype : 'hidden',
				name : 'id',
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