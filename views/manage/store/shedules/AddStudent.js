Ext.define('manage.store.shedules.AddStudent', {
	extend : 'manage.store.Store',
	model : 'manage.model.shedules.Student',
	autoLoad : session.authority.indexOf('b90108')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=getStudentList&funcId=f90108',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
	//groupField: 'c_name'
});