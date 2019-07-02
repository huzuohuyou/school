Ext.define('manage.store.studentSignStatistics.QueryStudent', {
	extend : 'manage.store.Store',
	model : 'manage.model.studentSignStatistics.QueryStudent',
	autoLoad : session.authority.indexOf('b240502')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryClassStudents&funcId=f240502',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});