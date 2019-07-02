Ext.define('manage.store.teachersummary.Teachersummary', {
	extend : 'manage.store.Store',
	model : 'manage.model.teachersummary.Teachersummary',
	autoLoad : session.authority.indexOf('b160301')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryteachersummary&funcId=f160301&teacher_id='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});