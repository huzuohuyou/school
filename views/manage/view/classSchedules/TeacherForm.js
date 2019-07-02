Ext.define('manage.view.classSchedules.TeacherForm', {
	requires : ['manage.view.classSchedules.TeacherGrid','manage.view.classSchedules.TeacherlistQueryForm'],
	extend : 'Ext.form.Panel',
	alias : 'widget.teacherform',
	width: 1000,
    height: 500,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'temp'} ,{xtype : 'hidden',name : 'class_id'} ,{xtype : 'hidden',name : 'week'},{xtype:'teacherlistqueryform'},{xtype:'daiketeachergrid'}],
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
