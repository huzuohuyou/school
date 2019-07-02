Ext.define('manage.store.wx_courses.Wx_courses', {
	extend : 'manage.store.Store',
	model : 'manage.model.wx_courses.Wx_courses',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryWx_news&funcId=f350401&c_id='+4,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});