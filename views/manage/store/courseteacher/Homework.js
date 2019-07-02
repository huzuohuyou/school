Ext.define('manage.store.courseteacher.Homework', {
	extend : 'manage.store.Store',
	model : 'manage.model.homework.Homework',
	autoLoad : session.authority.indexOf('b60301') > -1 ? true : false,
	sorters : [ {
		property : 'date',
		direction : 'DESC'
	} ],
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f60301&id='
				+ session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});