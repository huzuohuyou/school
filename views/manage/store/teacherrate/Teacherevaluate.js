Ext.define('manage.store.teacherrate.Teacherevaluate', {
	extend : 'manage.store.Store',
	model : 'manage.model.teacherrate.Teacherevaluate',
	autoLoad : session.authority.indexOf('b140103')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=getTeacherEvaluates&funcId=f140103',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});