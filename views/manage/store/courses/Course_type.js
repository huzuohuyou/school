Ext.define('manage.store.courses.Course_type', {
	extend : 'manage.store.Store',
	model : 'manage.model.courses.Course_type',
	autoLoad : session.authority.indexOf('b30106')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f30106',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});