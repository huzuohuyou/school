Ext.define('manage.store.teacherrate.Ratelist',{
	extend : 'manage.store.Store',
	model : 'manage.model.teacherrate.Ratelist',
	autoLoad : session.authority.indexOf('b140106')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=getRateList&funcId=f140106',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});