Ext.define('manage.store.pre_courses.Pre_Courses', {
	extend : 'manage.store.Store',
	model : 'manage.model.pre_courses.Pre_Courses',
	autoLoad : session.authority.indexOf('b150101')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=getPreCoursesList&funcId=f150101&charger='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});