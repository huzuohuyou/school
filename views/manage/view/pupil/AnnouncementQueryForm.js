Ext.define('manage.view.pupil.AnnouncementQueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.pupilannouncementqueryform',
	items : [{
		xtype : 'datefield',
		format : 'Y-m-d',
		name : 'date',
		labelAlign : 'right',
		fieldLabel : '日期'
	}]
});