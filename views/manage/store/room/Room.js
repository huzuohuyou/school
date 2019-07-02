Ext.define('manage.store.room.Room', {
	extend : 'manage.store.Store',
	model : 'manage.model.room.Room',
	autoLoad : session.authority.indexOf('b30201')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f30201',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});