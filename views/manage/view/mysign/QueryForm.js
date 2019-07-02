Ext.define('manage.view.mysign.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.mysignqueryform',
	items : [ {
		xtype : 'textfield',
		name : 'number',
		labelAlign : 'right',
		fieldLabel : '学号'
	},{
		xtype : 'textfield',
		name : 'c_name',
		labelAlign : 'right',
		fieldLabel : '班级名称'
	} ]
});