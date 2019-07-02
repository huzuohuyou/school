Ext.define('manage.store.score.Score', {
	extend : 'manage.store.Store',
	autoLoad : false,
	model : 'manage.model.score.Score',
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f30601',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	},
    groupField: 'c_name'
});