Ext.define('manage.view.classSchedules.Form', {
	extend : 'manage.view.moudle.Form',
	alias : 'widget.classSchedulesform',
	initComponent : function() {
		var me = this;
		Ext.applyIf(me,{
			items : [ {
				xtype : 'textfield',
				fieldLabel : '上课时间',
				name : 'worktime',
				afterLabelTextTpl : required,
				blankText : '此项为必填项',
				allowBlank : true
			},{
				xtype : 'textfield',
				fieldLabel : '上课地点',
				name : 'position',
				afterLabelTextTpl : required,
				blankText : '此项为必填项',
				allowBlank : true
			},
			{
				xtype : 'button',
				text : '选择代课教师',
				action : 'selectTeacher',
			
			},
			{
				xtype : 'displayfield',
				fieldLabel : '代课教师',
				labelAlign : 'right',
				name : 'temp_teacher_name',
			},
			{
				xtype : 'hidden',
				name : 'id'
			},
			{
				xtype : 'hidden',
				name : 'class_id'
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