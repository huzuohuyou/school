Ext.define('manage.view.chargeplanactivity.StepForm', {
	requires : ['manage.view.chargeplanactivity.StepGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.chargeplanactivitystepform',
	width:600,
    height: 500,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'activityId'} ,{xtype:'chargeplanactivitystepgrid'}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});
