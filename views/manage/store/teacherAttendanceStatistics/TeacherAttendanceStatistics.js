Ext.define('manage.store.teacherAttendanceStatistics.TeacherAttendanceStatistics', {
	extend : 'manage.store.Store',
	model : 'manage.model.teacherAttendanceManagent.TeacherAttendanceManagent',
	autoLoad : session.authority.indexOf('b240201')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryteacherAttendanceStatistics&funcId=f240201',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	},
	 groupField: 'teacher_name'
});
