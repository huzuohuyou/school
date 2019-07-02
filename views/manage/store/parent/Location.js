Ext.define('manage.store.parent.Location', {
	extend : 'manage.store.Store',
	model : 'manage.model.location.Location',
	autoLoad : session.authority.indexOf('b70701') > -1 ? true : false,
	sorters : [ {
		property : 'time',
		direction : 'DESC'
	} ],
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f70701&id='
				+ session.loginname.substring(3),
		extraParams : {date : (new Date()).Format("yyyy-MM-dd")},
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});