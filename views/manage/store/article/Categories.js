Ext.define('manage.store.article.Categories', {
	extend : 'manage.store.Store',
	model : 'manage.model.categories.Categories',
	autoLoad : {limit:-1,start:0},
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=s00002&t_id=article',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});