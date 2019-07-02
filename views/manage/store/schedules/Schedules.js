Ext.define('manage.store.schedules.Schedules', {
	extend : 'manage.store.Store',
	model : 'manage.model.schedules.Schedules',
	autoLoad : session.authority.indexOf('b30401')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f30401',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});