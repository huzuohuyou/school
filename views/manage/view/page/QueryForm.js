Ext.define('manage.view.page.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.pagequeryform',
	items : [ {
		xtype : 'textfield',
		labelAlign : 'right',
		name : 'c_name',
		fieldLabel : '标题名称'
	}]
});