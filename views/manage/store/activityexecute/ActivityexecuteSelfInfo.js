Ext.define('manage.store.activityexecute.ActivityexecuteSelfInfo', {
	extend : 'manage.store.Store',
	model : 'manage.model.activityexecute.Activityexecute',
	autoLoad : session.authority.indexOf('b110901')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f110901&id='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});