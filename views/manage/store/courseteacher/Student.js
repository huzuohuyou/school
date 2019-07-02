Ext.define('manage.store.courseteacher.Student', {
	extend : 'manage.store.Store',
	model : 'manage.model.student.Student',
	autoLoad : session.authority.indexOf('b60201')>-1?{start:0,limit:-1}:false,
	sorters : [ {
		property : 'number',
		direction : 'ASC'
	}],
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f60201&id='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	},
    groupField: 'c_name'
});