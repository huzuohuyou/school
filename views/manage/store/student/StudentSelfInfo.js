Ext.define('manage.store.student.StudentSelfInfo', {
	extend : 'manage.store.Store',
	model : 'manage.model.student.Student',
	autoLoad : session.authority.indexOf('b110301')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f110301&id='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});