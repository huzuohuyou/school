Ext.define('manage.view.courseteacher.StudentQueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.teacherstudentqueryform',
	items : [ {
		xtype : 'textfield',
		name : 'number',
		labelAlign : 'right',
		fieldLabel : '学号'
	},{
		xtype : 'textfield',
		name : 'name',
		labelAlign : 'right',
		fieldLabel : '姓名'
	} ]
});