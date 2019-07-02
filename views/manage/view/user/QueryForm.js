Ext.define('manage.view.user.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.userqueryform',
	items : [ {
		xtype : 'textfield',
		labelAlign : 'right',
		name : 'u_name',
		fieldLabel : '用户姓名'
	},{
		xtype : 'textfield',
		labelAlign : 'right',
		name : 'r_name',
		fieldLabel : '角色名称'
	}]
});