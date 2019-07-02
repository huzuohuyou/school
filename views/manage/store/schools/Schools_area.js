Ext.define('manage.store.schools.Schools_area', {
	extend : 'manage.store.Store',
	model : 'manage.model.schools.Schools_area',
	autoLoad : session.authority.indexOf('b130206')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f130206',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});