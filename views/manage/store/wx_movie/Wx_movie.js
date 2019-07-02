Ext.define('manage.store.wx_movie.Wx_movie', {
	extend : 'manage.store.Store',
	model : 'manage.model.wx_movie.Wx_movie',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryWx_news&funcId=f350701&c_id='+7,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});