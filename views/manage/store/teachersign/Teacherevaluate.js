Ext.define('manage.store.teachersign.Teacherevaluate', {
	extend : 'manage.store.Store',
	model : 'manage.model.teachersign.Teacherevaluate',
	autoLoad : session.authority.indexOf('b120206')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=getListEvaluates&funcId=f120206',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});
