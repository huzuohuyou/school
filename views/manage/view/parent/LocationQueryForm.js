Ext.define('manage.view.parent.LocationQueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.parentlocationqueryform',
	items : [{
		xtype : 'datefield',
		format : 'Y-m-d',
		name : 'date',
		labelAlign : 'right',
		value:new Date(),
		fieldLabel : '日期'
	}]
});