Ext.define('manage.view.teacherlibrary.CourseViewForm', {
	requires : ['manage.view.teacherlibrary.TeacherCoursesGrid','manage.view.teacherlibrary.CourseQueryForm'],
	extend : 'Ext.form.Panel',
	alias : 'widget.teacherlibaraycourseviewform',
	width: 1000,
    height: 500,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype:'teachercoursesgrid'},{xtype : 'hidden',name : 'id'}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});