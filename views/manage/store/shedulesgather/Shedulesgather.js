Ext.define('manage.store.shedulesgather.Shedulesgather', {
	extend : 'manage.store.Store',
	autoLoad : session.authority.indexOf('b240101')>-1?true:false,
	sorters : [ {
		        property: 'week',
		        direction: 'ASC'
		    }],
	model : 'manage.model.shedulesgather.Shedulesgather',
	proxy : {
		type : 'ajax',
		url : 'system.do?action=getShedulesClassStatistics&funcId=f240101',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	},
	groupField: 'school_name'
});