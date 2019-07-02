Ext.define('manage.view.teachersign.StateForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.teacherStateform',
	requires : [ 'manage.view.ux.ComboBox' ],
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
			items : [
			{
				xtype : 'mycombo',
				store:[["1","出勤"],["2","缺勤"],["3","迟到"],["4","早退"]],
				queryMode : 'local',
				fieldLabel : '签到状态',
				name : 'states',
				editable : false,
				afterLabelTextTpl : required,
				emptyText : '请选择',
				blankText : '此项为必填项',
				allowBlank : false
			},
			{
				xtype : 'hidden',
			     name : 'ssd_id'
			},
			{
				xtype : 'hidden',
			     name : 'c_id'
			},
			{
				xtype : 'hidden',
			     name : 'status'
			},
			{
				xtype : 'hidden',
			     name : 'teacher_id'
			},
			{
				xtype : 'hidden',
			     name : 'week'
			},
			{
				xtype : 'hidden',
			     name : 'temp_teacher_id'
			},
			{
				xtype : 'hidden',
			     name : 'temp_teacher_name'
			}
			]
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