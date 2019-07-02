Ext.define('manage.store.classSchedules.AddClassStudent', {
	extend : 'manage.store.Store',
	model : 'manage.model.classSchedules.AddClassStudent',
	autoLoad : session.authority.indexOf('b31205')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=getClassStudentList&funcId=f31205',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});