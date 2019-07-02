Ext.define('manage.store.saler.SalerSelfInfo', {
	extend : 'manage.store.Store',
	model : 'manage.model.saler.Saler',
	autoLoad : session.authority.indexOf('b110401')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f110401&id='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});