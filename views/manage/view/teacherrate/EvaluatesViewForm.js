Ext.define('manage.view.teacherrate.EvaluatesViewForm', {
	requires : ['manage.view.teacherrate.EvaluateViewGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.evaluatesviewform',
	width: 1200,
    height: 600,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'id'}, {xtype : 'hidden',name : 'number'},{xtype:'evaluateviewgrid'}],
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