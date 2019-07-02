Ext.define('manage.store.student_charger.School', {
	extend : 'manage.store.Store',
	model : 'manage.model.schools.Schools',
	autoLoad : session.authority.indexOf('b170201')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryChargerSchools&funcId=f170201&id='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});