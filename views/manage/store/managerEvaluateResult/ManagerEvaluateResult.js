Ext.define('manage.store.managerEvaluateResult.ManagerEvaluateResult', {
	extend : 'manage.store.Store',
	model : 'manage.model.managerEvaluateResult.ManagerEvaluateResult',
	autoLoad : session.authority.indexOf('b210201')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryManagerEvaluateResult&funcId=f210201&id='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});