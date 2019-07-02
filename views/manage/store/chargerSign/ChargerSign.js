Ext.define('manage.store.chargerSign.ChargerSign', {
	extend : 'manage.store.Store',
	model : 'manage.model.chargerSign.ChargerSign',
	autoLoad : session.authority.indexOf('b70201')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryChargerSignList&funcId=f70201',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});