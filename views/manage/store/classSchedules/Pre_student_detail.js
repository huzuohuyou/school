Ext.define('manage.store.classSchedules.Pre_student_detail', {
	extend : 'manage.store.Store',
	model : 'manage.model.classSchedules.StudentList',
	autoLoad : session.authority.indexOf('b31204')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=getStudentdetail&funcId=f31204',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});