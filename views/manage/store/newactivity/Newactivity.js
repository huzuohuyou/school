Ext.define('manage.store.newactivity.Newactivity', {
	extend : 'manage.store.Store',
	model : 'manage.model.newactivity.Newactivity',
	autoLoad : session.authority.indexOf('b260101')>-1?true:false,
	sorters : [ {
		property : 'aw.create_time',
		direction : 'DESC'
	} ],
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f260101&s_id='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});