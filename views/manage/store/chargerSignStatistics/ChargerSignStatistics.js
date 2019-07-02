Ext.define('manage.store.chargerSignStatistics.ChargerSignStatistics', {
	extend : 'manage.store.Store',
	model : 'manage.model.chargerSignStatistics.ChargerSignStatistics',
	autoLoad : session.authority.indexOf('b240401')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryChargerGather&funcId=f240401',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});