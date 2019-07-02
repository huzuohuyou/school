Ext.define('manage.view.headteacher.LocationQueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.headteacherlocationqueryform',
	items : [{
		xtype : 'datefield',
		format : 'Y-m-d',
		name : 'date',
		value : new Date(),
		labelAlign : 'right',
		fieldLabel : '日期'
	},{
		xtype : 'textfield',
		name : 's_number',
		labelAlign : 'right',
		fieldLabel : '学号'
	}]
});