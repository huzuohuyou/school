Ext.define('manage.store.wx_research_in.Wx_research_in', {
	extend : 'manage.store.Store',
	model : 'manage.model.wx_research_in.Wx_research_in',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryWx_news&funcId=f350201&c_id='+2,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});