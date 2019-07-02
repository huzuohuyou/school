Ext.define('manage.store.headteacher.Location', {
	extend : 'manage.store.Store',
	model : 'manage.model.location.Location',
	autoLoad : session.authority.indexOf('b50601') > -1 ? true : false,
	sorters : [ {
		property : 'time',
		direction : 'DESC'
	} ],
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f50601&id='
				+ session.id,
		extraParams : {date : (new Date()).Format("yyyy-MM-dd")},
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});