Ext.define('manage.store.activityplan.Activityplan', {
	extend : 'manage.store.Store',
	model : 'manage.model.activityplan.Activityplan',
	autoLoad : session.authority.indexOf('b220101')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f220101',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});