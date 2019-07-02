Ext.define('manage.store.classSchedules.ClassSchedules', {
	extend : 'manage.store.Store',
	model : 'manage.model.classSchedules.ClassSchedules',
	autoLoad : session.authority.indexOf('b31201')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f31201',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});