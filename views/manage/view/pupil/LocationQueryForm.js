Ext.define('manage.view.pupil.LocationQueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.pupillocationqueryform',
	items : [{
		xtype : 'datefield',
		format : 'Y-m-d',
		name : 'date',
		labelAlign : 'right',
		value : new Date(),
		fieldLabel : '日期'
	}]
});