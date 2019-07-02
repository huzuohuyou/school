Ext.define('manage.store.teacherrate.Teacherrate', {
	extend : 'manage.store.Store',
	model : 'manage.model.teacherrate.Teacherrate',
	autoLoad : session.authority.indexOf('b140101')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f140101',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});