Ext.define('manage.store.studentsign.School', {
	extend : 'manage.store.Store',
	model : 'manage.model.schools.Schools',
	autoLoad : session.authority.indexOf('b170101')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryChargerSchools&funcId=f170101&id='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});