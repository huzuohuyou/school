Ext.define('manage.view.role.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.rolequeryform',
	items : [ {
		xtype : 'textfield',
		labelAlign : 'right',
		name : 'name',
		fieldLabel : '角色名称'
	}]
});