Ext.define('manage.store.wx_art.Wx_art', {
	extend : 'manage.store.Store',
	model : 'manage.model.wx_art.Wx_art',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryWx_news&funcId=f350901&c_id='+9,//参数=6，这个是特惠的内容
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});