Ext.define('manage.view.onlinestudent.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.onlinestudentqueryform',
	requires : [ 'manage.view.ux.ComboBox'],
	items : [ {
		xtype : 'textfield',
		name : 'number',
		labelAlign : 'right',
		fieldLabel : '学号'
	},{
		xtype : 'textfield',
		name : 'name',
		labelAlign : 'right',
		fieldLabel : '姓名'
	},{
		xtype : 'combobox',
		name : 'status',
		store:[["","全部"],["1","在校"],["-1","离校"]],
		labelAlign : 'right',
		fieldLabel : '状态',
	}]
});