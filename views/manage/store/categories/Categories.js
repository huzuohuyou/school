Ext.define('manage.store.categories.Categories', {
	extend : 'Ext.data.TreeStore',
	model : 'manage.model.categories.Categories',
	autoLoad : session.authority.indexOf('b20101') > -1 ? true : false,
	sorters : [ {
		property : 'order_flag',
		direction : 'ASC'
	} ],
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f20101',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	},
	root : {
		expanded : true,
		id : 0
	}
});