Ext.define('manage.store.headteacher.Attendance', {
	extend : 'manage.store.Store',
	model : 'manage.model.attendance.Attendance',
	autoLoad : session.authority.indexOf('b50401') > -1 ? true : false,
	sorters : [ {
		property : 'typetime',
		direction : 'DESC'
	} ,{
        property: 's_number',
        direction: 'ASC'
    }],
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f50401&id='
				+ session.id,
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