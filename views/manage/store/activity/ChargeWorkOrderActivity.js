Ext.define('manage.store.activity.ChargeWorkOrderActivity', {
	extend : 'manage.store.Store',
	model : 'manage.model.activity.Activity',
	autoLoad : session.authority.indexOf('b300201')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f300201',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});