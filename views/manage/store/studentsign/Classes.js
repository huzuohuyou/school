Ext.define('manage.store.studentsign.Classes', {
	extend : 'manage.store.Store',
	model : 'manage.model.studentsign.Classes',
	autoLoad : session.authority.indexOf('b170102')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryStudentSignClasses&funcId=f170102',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});