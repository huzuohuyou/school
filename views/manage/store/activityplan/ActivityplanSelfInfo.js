Ext.define('manage.store.activityplan.ActivityplanSelfInfo', {
	extend : 'manage.store.Store',
	model : 'manage.model.activityplan.Activityplan',
	autoLoad : session.authority.indexOf('b110801')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f110801&id='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});