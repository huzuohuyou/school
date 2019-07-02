Ext.define('manage.store.onlineteacher.Onlineteacher', {
	extend : 'manage.store.Store',
	model : 'manage.model.onlineteacher.OnlineTeacher',
	autoLoad : session.authority.indexOf('b40601')>-1?true:false,
//	sorters : [ {
//        property: 't_number',
//        direction: 'ASC'
//    }],
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f40601',
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