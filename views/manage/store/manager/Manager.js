Ext.define('manage.store.manager.Manager', {
	extend : 'manage.store.Store',
	model : 'manage.model.manager.Manager',
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