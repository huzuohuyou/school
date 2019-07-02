Ext.define('manage.store.newactivity_plan.Newactivity_plan', {
	extend : 'manage.store.Store',
	model : 'manage.model.newactivity_plan.Newactivity_plan',
	autoLoad : session.authority.indexOf('b260201')>-1?true:false,
	sorters : [ {
		property : 'aw.create_time',
		direction : 'DESC'
	} ],		
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f260201&p_id='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});