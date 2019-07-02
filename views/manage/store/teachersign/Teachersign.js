Ext.define('manage.store.teachersign.Teachersign', {
	extend : 'manage.store.Store',
	model : 'manage.model.teachersign.Teachersign',
	autoLoad : session.authority.indexOf('b180102')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryTeacherSignList&funcId=f180102',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	},
	 groupField: 'week'
});
