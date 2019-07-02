Ext.define('manage.store.schools.StudentList', {
	extend : 'manage.store.Store',
	model : 'manage.model.schools.StudentList',
	autoLoad : session.authority.indexOf('b200101')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=getSchoolStudentList&funcId=f200101',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	},
	 groupField: 'grad'
});