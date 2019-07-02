Ext.define('manage.store.teachercourse.Teachercourse', {
	extend : 'manage.store.Store',
	model : 'manage.model.teachercourse.Teachercourse',
	autoLoad : session.authority.indexOf('b120101')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryteachercourses&funcId=f120101&teacher_id='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});