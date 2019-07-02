Ext.define('manage.store.yxactivity.YxType', {
	extend : 'manage.store.Store',
	model : 'manage.model.yxactivity.YxType',
	autoLoad : {limit:-1,start:0},
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=s500101',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});