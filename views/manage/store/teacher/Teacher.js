Ext.define('manage.store.teacher.Teacher', {
	extend : 'manage.store.Store',
	model : 'manage.model.teacher.Teacher',
	autoLoad : session.authority.indexOf('b40101')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryAllTeachers&funcId=f40101',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});