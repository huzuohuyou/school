Ext.define('manage.store.pre_courses.Classes_Detail', {
	extend : 'manage.store.Store',
	model : 'manage.model.pre_courses.Classes_Detail',
	autoLoad : false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryPre_courses_classesDetail&funcId=f150104',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});