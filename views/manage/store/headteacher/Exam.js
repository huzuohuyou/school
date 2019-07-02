Ext.define('manage.store.headteacher.Exam', {
	extend : 'Ext.data.TreeStore',
	model : 'manage.model.exam.Exam',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=getHeadTeacherExamList',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});