Ext.define('manage.view.chargerSign.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.chargerSignqueryform',
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