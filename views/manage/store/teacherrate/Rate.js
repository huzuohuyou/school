Ext.define('manage.store.teacherrate.Rate', {
	extend : 'manage.store.Store',
	model : 'manage.model.teacherrate.Rate',
	autoLoad : session.authority.indexOf('b140106')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f140106',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});