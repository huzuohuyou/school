Ext.define('manage.view.planeditactivity.StepForm', {
	requires : ['manage.view.planeditactivity.StepGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.planeditactivitystepform',
	width:600,
    height: 500,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'activityId'} ,{xtype:'planeditactivitystepgrid'}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});
