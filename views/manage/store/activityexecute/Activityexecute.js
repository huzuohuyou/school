Ext.define('manage.store.activityexecute.Activityexecute', {
	extend : 'manage.store.Store',
	model : 'manage.model.activityexecute.Activityexecute',
	autoLoad : session.authority.indexOf('b220201')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f220201',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});