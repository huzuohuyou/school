Ext.define('manage.store.teacher.Listteacher', {
	extend : 'manage.store.Store',
	model : 'manage.model.teacher.Allocatedteacher',
	autoLoad : session.authority.indexOf('b40506')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=getListteacher&funcId=f40506',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});