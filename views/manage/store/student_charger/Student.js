Ext.define('manage.store.student_charger.Student', {
	extend : 'manage.store.Store',
	model : 'manage.model.student.Student',
	autoLoad : session.authority.indexOf('b170201')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryChargerSchoolStudents&funcId=f170201',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	},
	 groupField: 'grad'
});