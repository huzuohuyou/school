Ext.define('manage.store.activity.Student', {
	extend : 'manage.store.Store',
	model : 'manage.model.activity.Student',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryActivityStudent',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});