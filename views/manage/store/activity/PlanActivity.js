Ext.define('manage.store.activity.PlanActivity', {
	extend : 'manage.store.Store',
	model : 'manage.model.activity.Activity',
	autoLoad : session.authority.indexOf('b320101')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f320101&userId='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});