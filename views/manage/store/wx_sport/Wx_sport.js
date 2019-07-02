Ext.define('manage.store.wx_sport.Wx_sport', {
	extend : 'manage.store.Store',
	model : 'manage.model.wx_sport.Wx_sport',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryWx_news&funcId=f351001&c_id='+10,//参数=10，这个是特惠的内容
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});