Ext.define('manage.store.teachersign.School', {
	extend : 'manage.store.Store',
	model : 'manage.model.schools.Schools',
	autoLoad : session.authority.indexOf('b180101')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryChargerSchools&funcId=f180101&id='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});