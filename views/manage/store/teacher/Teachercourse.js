Ext.define('manage.store.teacher.Teachercourse', {
	extend : 'manage.store.Store',
	model : 'manage.model.teacher.Teachercourse',
	autoLoad : session.authority.indexOf('b40108')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f40108',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});