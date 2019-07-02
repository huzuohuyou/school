Ext.define('manage.store.manager.Role', {
	extend : 'manage.store.Store',
	model : 'manage.model.role.Role',
	autoLoad : session.authority.indexOf('b10301')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f10301',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});