Ext.define('manage.store.qtactivity.QtActivity', {
	extend : 'manage.store.Store',
	model : 'manage.model.qtactivity.QtActivity',
	autoLoad : session.authority.indexOf('b500301')>-1?true:false,
	sorters : [ {
		property : 'time',
		direction : 'DESC'
	} ],
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f500301',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});