Ext.define('manage.view.location.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.locationqueryform',
	items : [{
		xtype : 'datefield',
		format : 'Y-m-d',
		name : 'date',
		labelAlign : 'right',
		value : new Date(),
		fieldLabel : '日期'
	},{
		xtype : 'textfield',
		name : 's_number',
		labelAlign : 'right',
		fieldLabel : '学号'
	},{
		xtype : 'textfield',
		name : 'class',
		labelAlign : 'right',
		fieldLabel : '班级'
	}]
});