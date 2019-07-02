Ext.define('manage.store.pre_courses.querycourses', {
	extend : 'manage.store.Store',
	model : 'manage.model.courses.Courses',
	autoLoad : session.authority.indexOf('b150107')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=getCoursesList&funcId=f150107',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}	
	},
	 groupField: 'stage'
	
});