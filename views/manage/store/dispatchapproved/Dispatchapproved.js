Ext.define('manage.store.dispatchapproved.Dispatchapproved', {
	extend : 'manage.store.Store',
	model : 'manage.model.coursedispatch.Coursedispatch',
	autoLoad : session.authority.indexOf('b190201')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryDispatchPassed&funcId=f190201',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});