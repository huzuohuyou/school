Ext.define('manage.store.activity.ChargePlanActivity', {
	extend : 'manage.store.Store',
	model : 'manage.model.activity.Activity',
	autoLoad : session.authority.indexOf('b300301')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f300301',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});