Ext.define('manage.store.agency.Agency', {
	extend : 'manage.store.Store',
	model : 'manage.model.agency.Agency',
	autoLoad : session.authority.indexOf('b40201')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryAgencyTeacheramount&funcId=f40201',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});