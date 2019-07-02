Ext.define('manage.store.dispatchapprove.Dispatchapprove', {
	extend : 'manage.store.Store',
	model : 'manage.model.coursedispatch.Coursedispatch',
	autoLoad : session.authority.indexOf('b190101')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryWaitDispatch&funcId=f190101',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});