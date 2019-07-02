Ext.define('manage.view.activityState.Form', {
	extend : 'Ext.form.Panel',
	alias : 'widget.activityStateform',
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
									data : activitystateData
								}),
				queryMode : 'local',
				fieldLabel : '活动状态',
				name : 'status_id',
				editable : false,
				afterLabelTextTpl : required,
				emptyText : '请选择',
				blankText : '此项为必填项',
				allowBlank : false
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