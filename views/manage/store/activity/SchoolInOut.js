Ext.define('manage.store.activity.SchoolInOut', {
	extend : 'manage.store.Store',
	model : 'manage.model.activity.Activity',
	autoLoad : session.authority.indexOf('b310201')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=querySchoolInOut',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});