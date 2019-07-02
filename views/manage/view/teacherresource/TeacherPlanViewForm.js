Ext.define('manage.view.teacherresource.TeacherPlanViewForm', {
	requires : ['manage.view.teacherresource.TeacherPlanGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.teacherplanviewform',
	width: 1000,
    height: 600,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'teacher_id'},{xtype : 'hidden',name : 't_name'},{xtype:'teacherplangrid'}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});