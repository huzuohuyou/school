Ext.define('manage.view.chargeactivity.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.chargeactivityqueryform',
	items : [ {
		xtype : 'textfield',
		name : 'activityNo',
		labelAlign : 'right',
		fieldLabel : '活动编号'
	},{
		xtype : 'textfield',
		name : 'name',
		labelAlign : 'right',
		fieldLabel : '活动名称'
	},{
		xtype : 'textfield',
		name : 'status',
		labelAlign : 'right',
		fieldLabel : '活动状态'
	},{
		xtype : 'hidden',
		name : 'userId',
		value:session.id
	} ]
});