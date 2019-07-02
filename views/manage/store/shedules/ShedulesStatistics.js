Ext.define('manage.store.shedules.ShedulesStatistics', {
	extend : 'manage.store.Store',
	model : 'manage.model.shedules.ShedulesStatistics',
	autoLoad : false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryShedulesClassesAll&funcId=f90103',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});