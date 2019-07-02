Ext.define('manage.view.wx_courses.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.wx_coursesqueryform',
	items : [{
		xtype : 'textfield',
		labelAlign : 'right',
		name : 'title',
		fieldLabel : '标题名称'
	}]
});