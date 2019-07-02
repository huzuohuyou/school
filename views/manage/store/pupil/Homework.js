Ext.define('manage.store.pupil.Homework', {
	extend : 'manage.store.Store',
	model : 'manage.model.homework.Homework',
	autoLoad : session.authority.indexOf('b80301') > -1 ? true : false,
	sorters : [ {
		property : 'date',
		direction : 'DESC'
	} ],
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f80301&id='
				+ session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});