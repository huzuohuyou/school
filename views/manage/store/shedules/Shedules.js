Ext.define('manage.store.shedules.Shedules', {
	extend : 'manage.store.Store',
	autoLoad : session.authority.indexOf('b90101')>-1?true:false,
	model : 'manage.model.shedules.Shedules',
	proxy : {
		type : 'ajax',
		url : 'system.do?action=getShedulesList&funcId=f90101',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
    //groupField: 'worktime'
});