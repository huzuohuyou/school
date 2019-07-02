Ext.define('manage.store.pupil.Exam', {
	extend : 'Ext.data.TreeStore',
	model : 'manage.model.exam.Exam',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f80401&id='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});