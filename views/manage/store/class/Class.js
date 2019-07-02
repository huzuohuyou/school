Ext.define('manage.store.class.Class', {
	extend : 'Ext.data.TreeStore',
	model : 'manage.model.class.Class',
	autoLoad : session.authority.indexOf('b30301') > -1 ? true : false,
	sorters : [ {
		property : 'order_flag',
		direction : 'ASC'
	} ],
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=s30301',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});