Ext.define('manage.store.parent.Student', {
	extend : 'manage.store.Store',
	model : 'manage.model.student.Student',
	autoLoad : session.authority.indexOf('b70101')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f70101&number='+session.loginname.substring(3),
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});