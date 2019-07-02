Ext.define('manage.store.score.Exam', {
	extend : 'Ext.data.TreeStore',
	model : 'manage.model.exam.Exam',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=getExamList&funcId=f30601',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});