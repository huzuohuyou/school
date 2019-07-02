Ext.define('manage.view.pre_activity.ViewForm', {
	requires : ['manage.view.pre_activity.ActivityGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.preactivityviewform',
	width: 800,
    height: 500,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'pre_activity_id'} ,{xtype:'detail_activitygrid'}],
	buttons : [ {
		text : '确定',
		action : 'submit'
	}, {
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});
