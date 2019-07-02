Ext.define('manage.store.shedules.ManualStudent', {
	extend : 'manage.store.Store',
	model : 'manage.model.shedules.Student',
	autoLoad : session.authority.indexOf('b90111')>-1?true:false,
	sorters : [ {
				property : 'class_id',
				direction : 'ASC'
			} ],
	proxy : {
		type : 'ajax',
		url : 'system.do?action=manualStudentList&funcId=f90111',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});