Ext.define('manage.store.wx_activity.Wx_activity', {
	extend : 'manage.store.Store',
	model : 'manage.model.wx_activity.Wx_activity',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryWx_news&funcId=f350501&c_id='+5,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});