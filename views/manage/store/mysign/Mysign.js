Ext.define('manage.store.mysign.Mysign', {
	extend : 'manage.store.Store',
	model : 'manage.model.mysign.Mysign',
	autoLoad : session.authority.indexOf('b80601')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f80601&id='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});
