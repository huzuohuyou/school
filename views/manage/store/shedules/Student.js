Ext.define('manage.store.shedules.Student', {
	extend : 'manage.store.Store',
	model : 'manage.model.shedules.Student',
	autoLoad : session.authority.indexOf('b90107')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=querystudents&funcId=f90107',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
	//groupField: 'c_name'
});