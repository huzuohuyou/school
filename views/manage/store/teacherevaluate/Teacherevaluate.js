Ext.define('manage.store.teacherevaluate.Teacherevaluate', {
	extend : 'manage.store.Store',
	model : 'manage.model.teachersign.Teachersign',
	autoLoad : session.authority.indexOf('b180202')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryTeacherSignList&funcId=f180202',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	},
	 groupField: 'week'
});
