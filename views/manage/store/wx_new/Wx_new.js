Ext.define('manage.store.wx_new.Wx_new', {
	extend : 'manage.store.Store',
	model : 'manage.model.wx_new.Wx_new',
	autoLoad :true,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryWx_news&c_id='+1,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});