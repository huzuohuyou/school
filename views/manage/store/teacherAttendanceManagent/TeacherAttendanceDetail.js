Ext.define('manage.store.teacherAttendanceManagent.TeacherAttendanceDetail', {
	extend : 'manage.store.Store',
	model : 'manage.model.teacherAttendanceManagent.TeacherAttendanceDetail',
	autoLoad : session.authority.indexOf('b230102')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryteacherAttendanceDetail&funcId=f230102&id='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});
