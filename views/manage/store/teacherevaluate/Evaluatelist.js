Ext.define('manage.store.teacherevaluate.Evaluatelist', {
	extend : 'manage.store.Store',
	model : 'manage.model.teachersign.Teachersign',
	autoLoad : session.authority.indexOf('b180202')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryEvaluateList&funcId=f180202&id='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});
