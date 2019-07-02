Ext.define('manage.store.shedules.Teacher', {
	extend : 'manage.store.Store',
	model : 'manage.model.teacher.Teacher',
	autoLoad : false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=getShedulesAvailableTeachers&funcId=f90106',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});