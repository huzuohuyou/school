Ext.define('manage.view.executewaitactivity.StepForm', {
	requires : ['manage.view.executewaitactivity.StepGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.executewaitactivitystepform',
	width:600,
    height: 500,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'activityId'} ,{xtype:'executewaitactivitystepgrid'}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});
