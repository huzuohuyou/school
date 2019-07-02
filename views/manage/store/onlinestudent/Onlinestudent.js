Ext.define('manage.store.onlinestudent.Onlinestudent', {
	extend : 'manage.store.Store',
	model : 'manage.model.onlinestudent.OnlineStudent',
	autoLoad : session.authority.indexOf('b40701')>-1?true:false,
//	sorters : [ {
//        property: 't_number',
//        direction: 'ASC'
//    }],
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f40701',
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