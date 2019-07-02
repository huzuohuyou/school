Ext.define('manage.store.classSchedules.Teacherlist1', {
	extend : 'manage.store.Store',
	model : 'manage.model.classSchedules.Teacherlist',
	autoLoad : session.authority.indexOf('b31213')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=getteacherlist&funcId=f31213',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});