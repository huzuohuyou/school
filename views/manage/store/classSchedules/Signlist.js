Ext.define('manage.store.classSchedules.Signlist', {
	extend : 'manage.store.Store',
	model : 'manage.model.classSchedules.Signlist',
	autoLoad : session.authority.indexOf('b31209')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=getSignlist&funcId=f31209',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});