Ext.define('manage.store.shedules.ListDetail', {
	extend : 'manage.store.Store',
	model : 'manage.model.courses.Courses',
	autoLoad : false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=getListShedules&funcId=f30706',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});