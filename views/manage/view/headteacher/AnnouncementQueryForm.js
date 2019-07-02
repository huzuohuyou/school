Ext.define('manage.view.headteacher.AnnouncementQueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.headteacherannouncementqueryform',
	items : [{
		xtype : 'datefield',
		format : 'Y-m-d',
		name : 'date',
		labelAlign : 'right',
		fieldLabel : '日期'
	}]
});