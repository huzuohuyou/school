Ext.define('manage.store.charger.ChargerSelfInfo', {
	extend : 'manage.store.Store',
	model : 'manage.model.charger.Charger',
	autoLoad : session.authority.indexOf('b110501')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f110501&id='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});