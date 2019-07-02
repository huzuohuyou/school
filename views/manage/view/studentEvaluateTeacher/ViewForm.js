Ext.define('manage.view.studentEvaluateTeacher.ViewForm', {
	requires : ['manage.view.studentEvaluateTeacher.GradeGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.studentEvaluateTeacherviewform',
	width: 700,
    height: 400,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'ssd_id'},{xtype:'gradegrid'},{xtype : 'hidden',name : 'id'}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});