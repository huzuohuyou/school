Ext.define('manage.store.yxactivity.YxActivity', {
	extend : 'manage.store.Store',
	model : 'manage.model.yxactivity.YxActivity',
	autoLoad : session.authority.indexOf('b500101')>-1?true:false,
	sorters : [ {
		property : 'time',
		direction : 'DESC'
	} ],
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f500101',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});