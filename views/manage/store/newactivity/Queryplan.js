Ext.define('manage.store.newactivity.Queryplan', {
	extend : 'manage.store.Store',
	model : 'manage.model.activityplan.Activityplan',
	autoLoad :true,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=s220101',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});