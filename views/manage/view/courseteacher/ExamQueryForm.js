Ext.define('manage.view.courseteacher.ExamQueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.teacherexamqueryform',
	items : [{
		xtype : 'textfield',
		name : 'name',
		labelAlign : 'right',
		fieldLabel : '考试名称'
	} ]
});