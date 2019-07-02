Ext.define('manage.view.wx_plan.PlanReadingViewForm', {
	requires : ['manage.view.wx_plan.PlanReadingGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.planreadingviewform',
	width: 900,
    height: 600,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'id'},{xtype:'planreadinggrid'}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});