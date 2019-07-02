Ext.define('manage.view.device.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.devicequeryform',
	items : [ {
		xtype : 'textfield',
		name : 'location',
		labelAlign : 'right',
		fieldLabel : '地点名称'
	} ]
});