Ext.define('manage.store.zhsjactivity.ZhsjType', {
	extend : 'manage.store.Store',
	model : 'manage.model.zhsjactivity.ZhsjType',
	autoLoad : {limit:-1,start:0},
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=s500201',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});