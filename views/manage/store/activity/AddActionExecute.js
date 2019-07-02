Ext.define('manage.store.activity.AddActionExecute', {
	extend : 'manage.store.Store',
	model : 'manage.model.activity.AddActionPlan',
	autoLoad : session.authority.indexOf('b300110')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f300110',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});