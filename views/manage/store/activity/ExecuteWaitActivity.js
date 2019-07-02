Ext.define('manage.store.activity.ExecuteWaitActivity', {
	extend : 'manage.store.Store',
	model : 'manage.model.activity.Activity',
	autoLoad : session.authority.indexOf('b330301')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f330301&userId='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});