Ext.define('manage.store.parent.Announcement', {
	extend : 'manage.store.Store',
	model : 'manage.model.announcement.Announcement',
	autoLoad : session.authority.indexOf('b70801') > -1 ? true : false,
	sorters : [ {
		property : 'time',
		direction : 'DESC'
	} ],
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f70801&number='
				+session.loginname.substring(3),
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});