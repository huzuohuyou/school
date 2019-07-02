Ext.define('manage.store.pre_courses_saler.Pre_Courses_saler', {
	extend : 'manage.store.Store',
	model : 'manage.model.pre_courses.Pre_Courses',
	autoLoad : session.authority.indexOf('b31001')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f31001&charger='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});