Ext.define('manage.store.schools.Schoolcourse', {
	extend : 'manage.store.Store',
	model : 'manage.model.schools.Schoolcourse',
	autoLoad : session.authority.indexOf('b31203')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=getSchoolcourseList&funcId=f31203',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});