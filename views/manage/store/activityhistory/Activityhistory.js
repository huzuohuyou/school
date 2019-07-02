Ext.define('manage.store.activityhistory.Activityhistory', {
	extend : 'manage.store.Store',
	model : 'manage.model.activityselected.Activityselected',
	autoLoad : session.authority.indexOf('b210201')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f210201',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});
