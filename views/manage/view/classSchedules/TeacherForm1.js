Ext.define('manage.view.classSchedules.TeacherForm1', {
	requires : ['manage.view.classSchedules.TeacherGrid1','manage.view.classSchedules.TeacherlistQueryForm'],
	extend : 'Ext.form.Panel',
	alias : 'widget.teacherform1',
	width: 1000,
    height: 500,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'week'} ,{xtype : 'hidden',name : 'class_id'} ,{xtype : 'hidden',name : 'name'},{xtype : 'hidden',name : 'course_name'},{xtype:'teacherlistqueryform'},{xtype:'teachergrid1'}],
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
