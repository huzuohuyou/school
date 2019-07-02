Ext.define('manage.store.newactivity_plan.Newactivity_plan', {
	extend : 'manage.store.Store',
	model : 'manage.model.newactivity_plan.Newactivity_plan',
	autoLoad : session.authority.indexOf('b260201')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryNewactivity&funcId=f260201',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});