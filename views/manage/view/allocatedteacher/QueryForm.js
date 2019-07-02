Ext.define('manage.view.allocatedteacher.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.allocatedteacherqueryform',
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