Ext.define('manage.store.classSchool.ClassSchool', {
	extend : 'manage.store.Store',
	model : 'manage.model.classSchool.ClassSchool',
	autoLoad : session.authority.indexOf('b31201')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f31201',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});