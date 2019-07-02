Ext.define('manage.store.banner.Banner', {
	extend : 'manage.store.Store',
	model : 'manage.model.banner.Banner',
	autoLoad : session.authority.indexOf('b20501')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f20501',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});