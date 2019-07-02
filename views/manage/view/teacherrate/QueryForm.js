Ext.define('manage.view.teacherrate.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.teacherratequeryform',
	items : [ {
		xtype : 'textfield',
		labelAlign : 'right',
		fieldLabel : '教师编号',
		name : 'number'
	},{
		xtype : 'textfield',
		labelAlign : 'right',
		name : 'name',
		fieldLabel : '教师姓名'
	}]
});