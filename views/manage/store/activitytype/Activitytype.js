Ext.define('manage.store.activitytype.Activitytype', {
	extend : 'manage.store.Store',
	model : 'manage.model.activitytype.Activitytype',
	autoLoad : session.authority.indexOf('b500401')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f500401',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});