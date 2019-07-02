Ext.define('manage.store.bottom.Bottom', {
	extend : 'manage.store.Store',
	model : 'manage.model.bottom.Bottom',
	autoLoad : session.authority.indexOf('b20601')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f20601',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});