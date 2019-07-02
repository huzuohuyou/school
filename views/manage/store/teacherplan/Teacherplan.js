Ext.define('manage.store.teacherplan.Teacherplan', {
	extend : 'manage.store.Store',
	model : 'manage.model.teacherpicture.Teacherpicture',
	autoLoad : session.authority.indexOf('b160201')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryteachercourses&funcId=f160201&teacher_id='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});