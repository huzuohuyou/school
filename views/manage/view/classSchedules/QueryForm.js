Ext.define('manage.view.classSchedules.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.classSchedulesqueryform',
	items : [ {
		xtype : 'textfield',
		name : 'number',
		labelAlign : 'right',
		fieldLabel : '学校编号'
	},{
		xtype : 'textfield',
		name : 'name',
		labelAlign : 'right',
		fieldLabel : '学校名称'
	} ]
});