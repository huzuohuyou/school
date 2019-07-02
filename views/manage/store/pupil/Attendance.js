Ext.define('manage.store.pupil.Attendance', {
	extend : 'manage.store.Store',
	model : 'manage.model.attendance.Attendance',
	autoLoad : session.authority.indexOf('b80601')>-1?true:false,
	sorters : [ {
		property : 'typetime',
		direction : 'DESC'
	} ],
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f80601&id='+session.id,
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