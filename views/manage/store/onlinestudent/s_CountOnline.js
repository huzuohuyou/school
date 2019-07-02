Ext.define('manage.store.onlinestudent.s_CountOnline', {
	extend : 'manage.store.Store',
	model : 'manage.model.onlinestudent.s_CountOnline',
	autoLoad : true,
//	sorters : [ {
//        property: 't_number',
//        direction: 'ASC'
//    }],
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=s40002',
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