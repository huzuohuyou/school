Ext.define('manage.store.newactivity_execute.Newactivity_execute', {
	extend : 'manage.store.Store',
	model : 'manage.model.newactivity_execute.Newactivity_execute',
	autoLoad : session.authority.indexOf('b260401')>-1?true:false,
	sorters : [ {
		property : 'aw.create_time',
		direction : 'DESC'
	} ],			
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f260401&e_id='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});