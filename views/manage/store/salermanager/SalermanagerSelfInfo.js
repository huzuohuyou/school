Ext.define('manage.store.salermanager.SalermanagerSelfInfo', {
	extend : 'manage.store.Store',
	model : 'manage.model.saler.Saler',
	autoLoad : session.authority.indexOf('b110601')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f110601&id='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});