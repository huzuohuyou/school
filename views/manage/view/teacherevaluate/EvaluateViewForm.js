Ext.define('manage.view.teacherevaluate.EvaluateViewForm', {
	requires : ['manage.view.teacherevaluate.EvaluateGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.evaluateviewform',
	width: 1000,
    height: 600,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'teacher_id'},{xtype : 'hidden',name : 'c_id'},{xtype:'evaluategrid'},{xtype : 'hidden',name : 'ssd_id'}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});
