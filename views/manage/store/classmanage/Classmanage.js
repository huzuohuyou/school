Ext.define('manage.store.classmanage.Classmanage', {
	extend : 'manage.store.Store',
	model : 'manage.model.classmanage.Classmanage',
	autoLoad : session.authority.indexOf('b31101')>-1?true:false,
	sorters : [ {
				property : 'states',
				direction : 'DESC'
			} ],
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f31101',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});