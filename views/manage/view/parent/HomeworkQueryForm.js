Ext.define('manage.view.parent.HomeworkQueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.parenthomeworkqueryform',
	items : [ {
		xtype : 'datefield',
		format : 'Y-m-d',
		name : 'date',
		labelAlign : 'right',
		fieldLabel : '日期'
	},{
		xtype : 'textfield',
		name : 'course_name',
		labelAlign : 'right',
		fieldLabel : '科目'
	} ]
});