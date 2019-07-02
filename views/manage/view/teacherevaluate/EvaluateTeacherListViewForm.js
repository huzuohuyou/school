Ext.define('manage.view.teacherevaluate.EvaluateTeacherListViewForm', {
	requires : ['manage.view.teacherevaluate.EvaluateTeacherListGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.evaluateteacherlistviewform',
	width: 1200,
    height: 600,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 's_id'},{xtype:'evaluateteacherlistgrid'}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});