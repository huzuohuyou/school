Ext.define('manage.store.wx_sport.SportReading', {
	extend : 'manage.store.Store',
	model : 'manage.model.wx_new.Wx_new',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryWx_newReadings&funcId=f351001',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});