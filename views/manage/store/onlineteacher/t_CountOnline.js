Ext.define('manage.store.onlineteacher.t_CountOnline', {
	extend : 'manage.store.Store',
	model : 'manage.model.onlineteacher.t_CountOnline',
	autoLoad : true,
//	sorters : [ {
//        property: 't_number',
//        direction: 'ASC'
//    }],
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=s40001',
		//extraParams : {time : (new Date()).Format("yyyy-MM-dd")},
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	},
	//groupField: 'class'
});