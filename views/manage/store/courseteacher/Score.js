Ext.define('manage.store.courseteacher.Score', {
	extend : 'manage.store.Store',
	model : 'manage.model.score.Score',
	autoLoad : false,
	sorters : [ {
        property: 'number',
        direction: 'ASC'
    }],
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f60401&t_id='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	},
    groupField: 'c_name'
});