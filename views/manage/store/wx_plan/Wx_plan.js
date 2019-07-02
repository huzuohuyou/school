Ext.define('manage.store.wx_plan.Wx_plan', {
	extend : 'manage.store.Store',
	model : 'manage.model.wx_plan.Wx_plan',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryWx_news&funcId=f350801&c_id='+8,//参数=6，这个是特惠的内容
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});