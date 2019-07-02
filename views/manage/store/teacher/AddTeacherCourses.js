Ext.define('manage.store.teacher.AddTeacherCourses', {
	extend : 'manage.store.Store',
	model : 'manage.model.courses.Courses',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryAddTeacherCourses',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});