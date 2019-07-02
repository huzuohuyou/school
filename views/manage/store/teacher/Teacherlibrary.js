Ext.define('manage.store.teacher.Teacherlibrary', {
	extend : 'manage.store.Store',
	model : 'manage.model.teacher.Teacher',
	autoLoad : session.authority.indexOf('b40301')>-1?true:false,
	sorters : [ {
				property : 'classcount',
				direction : 'DESC'
			} ],
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f40301',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});