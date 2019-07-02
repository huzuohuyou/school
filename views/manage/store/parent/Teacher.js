Ext.define('manage.store.parent.Teacher', {
	extend : 'manage.store.Store',
	model : 'manage.model.teacher.Teacher',
	autoLoad : session.authority.indexOf('b70501')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f70501&number='+session.loginname.substring(3),
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});