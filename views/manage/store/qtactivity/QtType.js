Ext.define('manage.store.qtactivity.QtType', {
	extend : 'manage.store.Store',
	model : 'manage.model.qtactivity.QtType',
	autoLoad : {limit:-1,start:0},
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=s500301',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});