Ext.define('manage.store.teacherAttendanceStatistics.TeacherAttendanceStatisticsDetail', {
	extend : 'manage.store.Store',
	model : 'manage.model.teacherAttendanceManagent.TeacherAttendanceDetail',
	autoLoad : session.authority.indexOf('b240202')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryteacherAttendanceStatisticsDetail&funcId=f240202',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});
