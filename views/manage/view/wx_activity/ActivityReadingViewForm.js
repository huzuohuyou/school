Ext.define('manage.view.wx_activity.ActivityReadingViewForm', {
	requires : ['manage.view.wx_activity.ActivityReadingGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.activityreadingviewform',
	width: 900,
    height: 600,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'id'},{xtype:'activityreadinggrid'}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});