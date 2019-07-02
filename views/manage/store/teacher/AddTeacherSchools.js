Ext.define('manage.store.teacher.AddTeacherSchools', {
	extend : 'manage.store.Store',
	model : 'manage.model.schools.Schools',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryAddTeacherSchools',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});