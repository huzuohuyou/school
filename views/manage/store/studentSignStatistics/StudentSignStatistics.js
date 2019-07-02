Ext.define('manage.store.studentSignStatistics.StudentSignStatistics', {
	extend : 'manage.store.Store',
	model : 'manage.model.studentSignStatistics.StudentSignStatistics',
	autoLoad : session.authority.indexOf('b240501')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=querySchoolClasses&funcId=f240501',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});