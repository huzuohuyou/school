Ext.define('manage.view.executestartedactivity.StepForm', {
	requires : ['manage.view.executestartedactivity.StepGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.executestartedactivitystepform',
	width:600,
    height: 500,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'activityId'} ,{xtype:'executestartedactivitystepgrid'}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});
