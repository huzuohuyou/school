Ext.define('manage.view.activitysaler.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.activitysalerqueryform',
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
	} ,{
		xtype : 'hidden',
		name : 'charger'
		
	}]
});