Ext.define('manage.store.pre_courses.ListDetail', {
	extend : 'manage.store.Store',
	model : 'manage.model.courses.Courses',
	autoLoad : false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=getListCourses&funcId=f30802',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});