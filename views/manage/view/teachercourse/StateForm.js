Ext.define('manage.view.studentState.Form', {
	extend : 'Ext.form.Panel',
	alias : 'widget.studentStateform',
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
				store : Ext.create('manage.store.ComboBox',{
									data : studentstateData
								}),
				queryMode : 'local',
				id:'sign',
				fieldLabel : '签到状态',
				name : 'states',
				editable : false,
				afterLabelTextTpl : required,
				emptyText : '请选择签到状态',
				blankText : '此项为必填项',
				allowBlank : false
			}, {
				xtype : 'hidden',
				name : 'id'
			},
			{
				xtype : 'hidden',
			     name : 'ssd_id'
			},
			{
				xtype : 'hidden',
			     name : 'student_id'
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