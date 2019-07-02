Ext.define('manage.store.teacher.TeacherSchools', {
	extend : 'manage.store.Store',
	model : 'manage.model.schools.Schools',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryTeacherSchools&funcId=f30101',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});