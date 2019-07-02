Ext.define('manage.view.teacherlibrary.AddCoursesForm', {
	requires : ['manage.view.teacherlibrary.AddCoursesGrid','manage.view.teacherlibrary.CourseQueryForm'],
	extend : 'Ext.form.Panel',
	alias : 'widget.teacherlibarayaddcoursesform',
	width: 1000,
    height: 500,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype:'teacherlibrarycoursesqueryform'},{xtype:'addcoursesgrid'},{xtype : 'hidden',name : 'id'}],
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