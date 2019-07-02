Ext.define('manage.store.parent.Attendance', {
	extend : 'manage.store.Store',
	model : 'manage.model.attendance.Attendance',
	autoLoad : session.authority.indexOf('b70601')>-1?true:false,
	sorters : [ {
		property : 'typetime',
		direction : 'DESC'
	} ],
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f70601&number='+session.loginname.substring(3),
		extraParams : {typetime : (new Date()).Format("yyyy-MM-dd")},
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	},
	groupField: 'name'
});