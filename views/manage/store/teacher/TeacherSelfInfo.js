Ext.define('manage.store.teacher.TeacherSelfInfo', {
	extend : 'manage.store.Store',
	model : 'manage.model.teacher.Teacher',
	autoLoad : session.authority.indexOf('b110201')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f110201&id='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});