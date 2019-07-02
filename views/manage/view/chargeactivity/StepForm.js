Ext.define('manage.view.chargeactivity.StepForm', {
	requires : ['manage.view.chargeactivity.StepGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.stepform',
	width:600,
    height: 500,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'activityId'} ,{xtype:'stepgrid'}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});
