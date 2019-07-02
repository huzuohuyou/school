Ext.define('manage.store.wx_odds.Wx_odds', {
	extend : 'manage.store.Store',
	model : 'manage.model.wx_odds.Wx_odds',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryWx_news&funcId=f350601&c_id='+6,//参数=6，这个是特惠的内容
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});