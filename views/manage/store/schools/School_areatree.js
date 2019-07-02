Ext.define('manage.store.schools.School_areatree', {
	extend : 'Ext.data.TreeStore',
	model : 'manage.model.schools.Schools_area',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=getSchoolList&funcId=f130106',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});