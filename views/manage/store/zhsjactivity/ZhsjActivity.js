Ext.define('manage.store.zhsjactivity.ZhsjActivity', {
	extend : 'manage.store.Store',
	model : 'manage.model.zhsjactivity.ZhsjActivity',
	autoLoad : session.authority.indexOf('b500201')>-1?true:false,
	sorters : [ {
		property : 'time',
		direction : 'DESC'
	} ],
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f500201',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});