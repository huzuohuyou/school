Ext.define('manage.store.headteacher.Announcement', {
	extend : 'manage.store.Store',
	model : 'manage.model.announcement.Announcement',
	autoLoad : session.authority.indexOf('b50501') > -1 ? true : false,
	sorters : [ {
		property : 'time',
		direction : 'DESC'
	} ],
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f50501&id='
				+ session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});