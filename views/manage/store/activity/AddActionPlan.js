Ext.define('manage.store.activity.AddActionPlan', {
	extend : 'manage.store.Store',
	model : 'manage.model.activity.AddActionPlan',
	autoLoad : session.authority.indexOf('b300109')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f300109',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});