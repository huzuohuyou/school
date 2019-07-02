Ext.define('manage.store.activity.StepRecord', {
	extend : 'manage.store.Store',
	model : 'manage.model.activity.StepRecord',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryStepRecord',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});