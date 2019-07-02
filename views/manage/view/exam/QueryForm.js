Ext.define('manage.view.exam.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.examqueryform',
	items : [{
		xtype : 'textfield',
		name : 'name',
		labelAlign : 'right',
		fieldLabel : '考试名称'
	} ]
});