Ext.define('manage.store.teacherevaluate.School', {
	extend : 'manage.store.Store',
	model : 'manage.model.schools.Schools',
	autoLoad : session.authority.indexOf('b180201')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryChargerSchools&funcId=f180201&id='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});