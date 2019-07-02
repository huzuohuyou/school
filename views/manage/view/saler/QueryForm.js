Ext.define('manage.view.saler.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.salerqueryform',
	items : [ {
		xtype : 'textfield',
		name : 'number',
		labelAlign : 'right',
		fieldLabel : '工号'
	},{
		xtype : 'textfield',
		name : 'name',
		labelAlign : 'right',
		fieldLabel : '姓名'
	} ]
});