Ext.define('manage.store.wx_research_out.ResearchReading', {
	extend : 'manage.store.Store',
	model : 'manage.model.wx_new.Wx_new',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryWx_newReadings&funcId=f350301',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});