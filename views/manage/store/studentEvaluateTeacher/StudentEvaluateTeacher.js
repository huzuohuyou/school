Ext.define('manage.store.studentEvaluateTeacher.StudentEvaluateTeacher', {
	extend : 'manage.store.Store',
	model : 'manage.model.studentEvaluateTeacher.StudentEvaluateTeacher',
	autoLoad : session.authority.indexOf('b200101')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryStudentTeachers&funcId=f200101&id='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});