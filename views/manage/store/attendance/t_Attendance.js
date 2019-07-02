Ext.define('manage.store.attendance.t_Attendance', {
	extend : 'manage.store.Store',
	model : 'manage.model.attendance.t_Attendance',
	autoLoad : session.authority.indexOf('b40501')>-1?true:false,
	sorters : [ {
		property : 'typetime',
		direction : 'DESC'
	} ,{
        property: 't_number',
        direction: 'ASC'
    }],
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f40501',
		extraParams : {typetime : (new Date()).Format("yyyy-MM-dd")},
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
	
});