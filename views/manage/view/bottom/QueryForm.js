Ext.define('manage.view.bottom.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.bottomqueryform',
	items : [{
		xtype : 'textfield',
		labelAlign : 'right',
		fieldLabel : '地址',
		name : 'address'
	} ]
});