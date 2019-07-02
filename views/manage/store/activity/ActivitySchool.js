Ext.define('manage.store.activity.ActivitySchool', {
	extend : 'manage.store.Store',
	model : 'manage.model.activity.ActivitySchool',
	autoLoad : session.authority.indexOf('b310101')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f310101&userId='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});