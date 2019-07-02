Ext.define('manage.store.exam.Exam', {
	extend : 'Ext.data.TreeStore',
	model : 'manage.model.exam.Exam',
	autoLoad : session.authority.indexOf('b30501') > -1 ? true : false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=getExamList&funcId=f30501',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});