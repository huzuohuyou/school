Ext.define('manage.store.article.Article', {
	extend : 'manage.store.Store',
	model : 'manage.model.article.Article',
	autoLoad : session.authority.indexOf('b20301')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f20301',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});