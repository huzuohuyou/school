Ext.define('manage.store.courseteacher.AddExam', {
	//extend : 'Ext.data.TreeStore',
	extend : 'manage.store.Store',
	model : 'manage.model.exam.Exam',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f60501&t_id='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});