Ext.define('manage.store.shedules.Shedules_Detail', {
	extend : 'manage.store.Store',
	model : 'manage.model.shedules.Shedules_Detail',
	autoLoad : false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryShedulesClasses&funcId=f90103',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});