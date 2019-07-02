Ext.define('manage.view.chargeworkorderactivity.StepForm', {
	requires : ['manage.view.chargeworkorderactivity.StepGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.chargeworkorderactivitystepform',
	width:600,
    height: 500,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'activityId'} ,{xtype:'chargeworkorderactivitystepgrid'}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});
