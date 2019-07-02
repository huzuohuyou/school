Ext.define('manage.store.location.Location', {
	extend : 'manage.store.Store',
	model : 'manage.model.location.Location',
	autoLoad : session.authority.indexOf('b40401') > -1 ? true : false,
	sorters : [ {
		property : 'time',
		direction : 'DESC'
	} ],
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f40401&id='
				+ session.id,
		extraParams : {date : (new Date()).Format("yyyy-MM-dd")},
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	},
	groupField: 'c_name'
});