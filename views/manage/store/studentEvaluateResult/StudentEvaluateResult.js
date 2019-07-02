Ext.define('manage.store.studentEvaluateResult.StudentEvaluateResult', {
	extend : 'manage.store.Store',
	model : 'manage.model.studentEvaluateResult.StudentEvaluateResult',
	autoLoad : session.authority.indexOf('b210101')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryteachercourses&funcId=f210101&teacher_id='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});