Ext.define('manage.store.role.Role', {
	extend : 'manage.store.Store',
	model : 'manage.model.role.Role',
	autoLoad : session.authority.indexOf('b10201')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f10201',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});