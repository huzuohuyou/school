Ext.define('manage.store.charger.Charger', {
	extend : 'manage.store.Store',
	model : 'manage.model.charger.Charger',
	autoLoad : session.authority.indexOf('b70101')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=getChargerList&funcId=f70101',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});