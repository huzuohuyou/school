Ext.define('manage.store.activityselected.Activity_state', {
	extend : 'manage.store.Store',
	model : 'manage.model.activityselected.Activity_state',
	autoLoad : session.authority.indexOf('b210401')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f210401',
		reader : {
			type : 'json', 
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});