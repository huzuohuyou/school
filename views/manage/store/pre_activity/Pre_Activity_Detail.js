Ext.define('manage.store.pre_activity.Pre_Activity_Detail', {
	extend : 'manage.store.Store',
	model : 'manage.model.pre_activity.Pre_Activity',
	autoLoad : session.authority.indexOf('b210211')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f210211',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});