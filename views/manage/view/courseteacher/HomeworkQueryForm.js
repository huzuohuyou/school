Ext.define('manage.view.courseteacher.HomeworkQueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.teacherhomeworkqueryform',
	items : [ {
		xtype : 'datefield',
		format : 'Y-m-d',
		name : 'date',
		labelAlign : 'right',
		fieldLabel : '日期'
	},{
		xtype : 'textfield',
		name : 'c_name',
		labelAlign : 'right',
		fieldLabel : '班级'
	} ]
});