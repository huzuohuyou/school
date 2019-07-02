Ext.define('manage.view.studentEvaluateResult.ViewForm', {
	requires : ['manage.view.studentEvaluateResult.EvaluateResultGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.studentEvaluateResultviewform',
	width: 1000,
    height: 500,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'ssd_id'},{xtype:'evaluateresultgrid'},{xtype : 'hidden',name : 'id'}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});