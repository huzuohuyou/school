Ext.define('manage.view.activityselected.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.activityselectedqueryform',
	items : [ {
		xtype : 'textfield',
		name : 'a_id',
		labelAlign : 'right',
		fieldLabel : '活动编号'
	},{
		xtype : 'textfield',
		name : 'name',
		labelAlign : 'right',
		fieldLabel : '活动名称'
	} ]
});