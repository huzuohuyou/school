Ext.define('manage.store.charger.ChargeNoSchool', {
	extend : 'manage.store.Store',
	model : 'manage.model.schools.Schools',
	autoLoad : session.authority.indexOf('b70103')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=getChargerNoSchools&funcId=f70103',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});