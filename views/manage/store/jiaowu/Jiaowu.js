Ext.define('manage.store.jiaowu.Jiaowu', {
	extend : 'manage.store.Store',
	model : 'manage.model.jiaowu.Jiaowu',
	autoLoad : session.authority.indexOf('b70301')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f70301',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});