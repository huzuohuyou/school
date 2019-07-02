Ext.define('manage.store.studentEvaluateTeacher.EvaluateGrade', {
	extend : 'manage.store.Store',
	model : 'manage.model.studentEvaluateTeacher.EvaluateGrade',
	autoLoad : session.authority.indexOf('b200103')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryEvaluateGrade&funcId=f200103&id='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});