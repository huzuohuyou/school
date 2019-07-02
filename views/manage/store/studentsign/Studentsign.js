Ext.define('manage.store.studentsign.Studentsign', {
	extend : 'manage.store.Store',
	model : 'manage.model.studentsign.Studentsign',
	autoLoad : session.authority.indexOf('b170101')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryStudentSignStudentList&funcId=f170103',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});
