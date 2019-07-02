Ext.define('manage.store.picture.Picture', {
	extend : 'manage.store.Store',
	model : 'manage.model.picture.Picture',
	autoLoad : session.authority.indexOf('b20401')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f20401',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});