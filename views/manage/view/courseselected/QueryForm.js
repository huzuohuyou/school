Ext.define('manage.view.courseselected.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.courseselectedqueryform',
	items : [ {
		xtype : 'textfield',
		name : 'c_id',
		labelAlign : 'right',
		fieldLabel : '课程编号'
	},{
		xtype : 'textfield',
		name : 'c_name',
		labelAlign : 'right',
		fieldLabel : '课程名称'
	} ]
});