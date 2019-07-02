Ext.define('manage.store.courseteacher.Exam', {
	extend : 'Ext.data.TreeStore',
	model : 'manage.model.exam.Exam',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=getTeacherExamList&funcId=f60401&t_id='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});