Ext.define('manage.store.headteacher.Student', {
	extend : 'manage.store.Store',
	model : 'manage.model.student.Student',
	autoLoad : session.authority.indexOf('b50201')>-1?{start:0,limit:-1}:false,
	sorters : [ {
		property : 'number',
		direction : 'ASC'
	}],
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f50201&id='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	},
	 groupField: 'c_name'
});