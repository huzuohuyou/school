Ext.define('manage.view.activityplan.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.activityplanqueryform',
	items : [{
		xtype : 'textfield',
		name : 'name',
		labelAlign : 'right',
		fieldLabel : '姓名'
	} ]
});