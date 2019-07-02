Ext.define('manage.store.saler.Saler', {
	extend : 'manage.store.Store',
	model : 'manage.model.saler.Saler',
	autoLoad : session.authority.indexOf('b60101')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f60101',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});