Ext.define('manage.store.newactivity_charger.Newactivity_charger', {
	extend : 'manage.store.Store',
	model : 'manage.model.newactivity_charger.Newactivity_charger',
	autoLoad : session.authority.indexOf('b260301')>-1?true:false,
	sorters : [ {
		property : 'aw.create_time',
		direction : 'DESC'
	} ],
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f260301',//'system.do?action=queryNewactivity_charger&funcId=f260301',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});