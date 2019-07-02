Ext.define('manage.store.user.User', {
	extend : 'manage.store.Store',
	model : 'manage.model.user.User',
	autoLoad : session.authority.indexOf('b10101')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f10101',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});