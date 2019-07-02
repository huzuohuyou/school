Ext.define('manage.store.pupil.Announcement', {
	extend : 'manage.store.Store',
	model : 'manage.model.announcement.Announcement',
	autoLoad : session.authority.indexOf('b80701') > -1 ? true : false,
	sorters : [ {
		property : 'time',
		direction : 'DESC'
	} ],
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f80701&id='
				+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});