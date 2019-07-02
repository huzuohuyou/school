Ext.define('manage.store.parent.Homework', {
	extend : 'manage.store.Store',
	model : 'manage.model.homework.Homework',
	autoLoad : session.authority.indexOf('b70301') > -1 ? true : false,
	sorters : [ {
		property : 'date',
		direction : 'DESC'
	} ],
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f70301&number='
				+ session.loginname.substring(3),
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});