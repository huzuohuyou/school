Ext.define('manage.store.schools.Schools', {
	extend : 'manage.store.Store',
	model : 'manage.model.schools.Schools',
	autoLoad : session.authority.indexOf('b130101')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f130101',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	},
	 groupField: 'area'
});