Ext.define('manage.store.teacher.TeacherCourses', {
	extend : 'manage.store.Store',
	model : 'manage.model.courses.Courses',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryTeacherCourses&funcId=f30101',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});