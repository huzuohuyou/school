Ext.define('manage.store.page.Page', {
	extend : 'manage.store.Store',
	model : 'manage.model.page.Page',
	autoLoad : session.authority.indexOf('b20201')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f20201',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});