Ext.define('manage.store.teacherpicture.Teacherpicture', {
	extend : 'manage.store.Store',
	model : 'manage.model.teacherpicture.Teacherpicture',
	autoLoad : session.authority.indexOf('b160101')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryteachercourses&funcId=f160101&teacher_id='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});