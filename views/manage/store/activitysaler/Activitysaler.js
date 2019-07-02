Ext.define('manage.store.activitysaler.Activitysaler', {
	extend : 'manage.store.Store',
	model : 'manage.model.activitysaler.Activitysaler',
	autoLoad : session.authority.indexOf('b210501')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f210501&charger='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});
