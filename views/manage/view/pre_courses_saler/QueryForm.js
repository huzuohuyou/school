Ext.define('manage.view.pre_courses_saler.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.pre_courses_salerqueryform',
	items : [ {
		xtype : 'textfield',
		name : 'number',
		labelAlign : 'right',
		fieldLabel : '推荐课表编号'
	},{
		xtype : 'textfield',
		name : 'name',
		labelAlign : 'right',
		fieldLabel : '学校名称'
	} ]
});