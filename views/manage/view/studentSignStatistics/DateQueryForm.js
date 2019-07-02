Ext.define('manage.view.studentSignStatistics.DateQueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.datequeryform',
	requires : [ 'manage.view.ux.ComboBox'],
	items : [{
		xtype : 'datefield',
		format : 'Y-m-d',
		name : 'time',
		labelAlign : 'right',
		value : new Date(),
		fieldLabel : '请先选择日期'
		
	},{
		xtype : 'hidden',
		name : 'ssd_id'
	}]
});