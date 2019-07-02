Ext.define('manage.store.activitydeleted.Activitydeleted', {
	extend : 'manage.store.Store',
	model : 'manage.model.activityselected.Activityselected',
	autoLoad : session.authority.indexOf('b210301')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f210301',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});
