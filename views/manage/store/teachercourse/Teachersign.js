Ext.define('manage.store.teachercourse.Teachersign', {
	extend : 'manage.store.Store',
	model : 'manage.model.teachercourse.Teachersign',
	autoLoad : session.authority.indexOf('b120104')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryclassStudent&funcId=f120104&teacher_id='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});