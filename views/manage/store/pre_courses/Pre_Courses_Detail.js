Ext.define('manage.store.pre_courses.Pre_Courses_Detail', {
	extend : 'manage.store.Store',
	model : 'manage.model.pre_courses.Pre_Courses_Detail',
	autoLoad : session.authority.indexOf('b150111')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f150111',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});