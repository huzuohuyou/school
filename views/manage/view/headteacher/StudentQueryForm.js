Ext.define('manage.view.headteacher.StudentQueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.headteacherstudentqueryform',
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