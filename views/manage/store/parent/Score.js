Ext.define('manage.store.parent.Score', {
	extend : 'manage.store.Store',
	autoLoad : false,
	model : 'manage.model.score.Score',
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f70402&number='+session.loginname.substring(3),
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	},
    groupField: 'c_name'
});