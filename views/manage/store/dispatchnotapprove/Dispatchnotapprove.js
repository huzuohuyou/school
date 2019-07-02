Ext.define('manage.store.dispatchnotapprove.Dispatchnotapprove', {
	extend : 'manage.store.Store',
	model : 'manage.model.coursedispatch.Coursedispatch',
	autoLoad : session.authority.indexOf('b190301')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryDispatchNotPass&funcId=f190301',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});