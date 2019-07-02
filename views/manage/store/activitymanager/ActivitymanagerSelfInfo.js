Ext.define('manage.store.activitymanager.ActivitymanagerSelfInfo', {
	extend : 'manage.store.Store',
	model : 'manage.model.saler.Saler',
	autoLoad : session.authority.indexOf('b110701')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f110701&id='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});