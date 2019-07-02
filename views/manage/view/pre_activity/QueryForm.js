Ext.define('manage.view.pre_activity.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.pre_activityqueryform',
	items : [ {
		xtype : 'textfield',
		name : 'number',
		labelAlign : 'right',
		fieldLabel : '活动编号'
	},{
		xtype : 'textfield',
		name : 'name',
		labelAlign : 'right',
		fieldLabel : '活动名称'
	} ]
});