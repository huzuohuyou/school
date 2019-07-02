Ext.define('manage.store.classSchedules.Teacherlist', {
	extend : 'manage.store.Store',
	model : 'manage.model.classSchedules.Teacherlist',
	autoLoad : session.authority.indexOf('b31210')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f31210',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});