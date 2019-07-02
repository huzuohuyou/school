Ext.define('manage.store.coursedispatch.Coursedispatch', {
	extend : 'manage.store.Store',
	model : 'manage.model.coursedispatch.Coursedispatch',
	autoLoad : session.authority.indexOf('b120201')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryalldispatch&funcId=f120201&u_id='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});