Ext.define('manage.store.studentEvaluateResult.EvaluateResultList', {
	extend : 'manage.store.Store',
	model : 'manage.model.studentEvaluateResult.StudentEvaluateResult',
	autoLoad : session.authority.indexOf('b210102')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryStudentEvaluateResult&funcId=f210102&id='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});