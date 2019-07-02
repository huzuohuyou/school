Ext.define('manage.store.attendance.Attendance', {
	extend : 'manage.store.Store',
	model : 'manage.model.attendance.Attendance',
	autoLoad : session.authority.indexOf('b40301')>-1?true:false,
	sorters : [ {
		property : 'typetime',
		direction : 'DESC'
	} ,{
        property: 's_number',
        direction: 'ASC'
    }],
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f40301',
		extraParams : {typetime : (new Date()).Format("yyyy-MM-dd")},
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	},
	groupField: 'class'
});