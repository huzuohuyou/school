Ext.define('manage.view.schedules.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.schedulesqueryform',
	items : [ {
		xtype : 'textfield',
		name : 'name',
		labelAlign : 'right',
		fieldLabel : '课表名称'
	}, {
		xtype : 'textfield',
		name : 'c_name',
		labelAlign : 'right',
		fieldLabel : '班级名称'
	}]
});