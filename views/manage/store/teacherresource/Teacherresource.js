Ext.define('manage.store.teacherresource.Teacherresource', {
	extend : 'manage.store.Store',
	model : 'manage.model.teacherresource.Teacherresource',
	autoLoad : session.authority.indexOf('b250101')>-1?true:false,
	sorters : [ {
					property : 'classcount',
					direction : 'DESC'
				} ],
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f250101',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});