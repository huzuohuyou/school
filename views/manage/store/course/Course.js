Ext.define('manage.store.course.Course', {
	extend : 'manage.store.Store',
	model : 'manage.model.course.Course',
	autoLoad : session.authority.indexOf('b30101')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f30101',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	},
	 groupField: 'stage'
});