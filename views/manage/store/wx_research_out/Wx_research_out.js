Ext.define('manage.store.wx_research_out.Wx_research_out', {
	extend : 'manage.store.Store',
	model : 'manage.model.wx_research_out.Wx_research_out',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryWx_news&funcId=f350201&c_id='+3,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});