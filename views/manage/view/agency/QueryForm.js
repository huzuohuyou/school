Ext.define('manage.view.agency.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.agencyqueryform',
	items : [{
		xtype : 'textfield',
		name : 'name',
		labelAlign : 'right',
		fieldLabel : '机构名称'
	} ]
});