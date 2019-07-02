Ext.define('manage.store.teacherAttendanceManagent.TeacherAttendanceManagent', {
	extend : 'manage.store.Store',
	model : 'manage.model.teacherAttendanceManagent.TeacherAttendanceManagent',
	autoLoad : session.authority.indexOf('b230101')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryteacherAttendance&funcId=f230101&id='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	},
	 groupField: 'week'
});
