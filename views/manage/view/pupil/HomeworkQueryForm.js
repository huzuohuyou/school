Ext.define('manage.view.pupil.HomeworkQueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.pupilhomeworkqueryform',
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