Ext.define('manage.store.pupil.Score', {
	extend : 'manage.store.Store',
	autoLoad : false,
	model : 'manage.model.score.Score',
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f80402&id='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	},
    groupField: 'c_name'
});