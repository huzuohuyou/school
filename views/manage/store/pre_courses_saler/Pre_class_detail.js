Ext.define('manage.store.pre_courses_saler.Pre_class_detail', {
	extend : 'manage.store.Store',
	model : 'manage.model.pre_courses.Pre_class_detail',
	autoLoad : session.authority.indexOf('b31011')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f31011',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	},
	 groupField: 'week'
});