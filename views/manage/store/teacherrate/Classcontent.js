Ext.define('manage.store.teacherrate.Classcontent', {
	extend : 'manage.store.Store',
	model : 'manage.model.teacherrate.Classcontent',
	autoLoad : session.authority.indexOf('b140102')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=getClasscontent&funcId=f140102',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});