Ext.define('manage.store.pupil.Location', {
	extend : 'manage.store.Store',
	model : 'manage.model.location.Location',
	autoLoad : session.authority.indexOf('b80501') > -1 ? true : false,
	sorters : [ {
		property : 'time',
		direction : 'DESC'
	} ],
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f80501&id='
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