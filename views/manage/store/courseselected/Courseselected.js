Ext.define('manage.store.courseselected.Courseselected', {
	extend : 'manage.store.Store',
	model : 'manage.model.courseselected.Courseselected',
	autoLoad : session.authority.indexOf('b80201')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=query_coursesselected&funcId=f80201&id='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	},
	 groupField: 'week'
});