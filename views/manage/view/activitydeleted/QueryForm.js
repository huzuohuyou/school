Ext.define('manage.view.activitydeleted.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.activitydeletedqueryform',
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