Ext.define('manage.view.parent.AnnouncementQueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.parentannouncementqueryform',
	items : [{
		xtype : 'datefield',
		format : 'Y-m-d',
		name : 'date',
		labelAlign : 'right',
		fieldLabel : '日期'
	}]
});