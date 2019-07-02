Ext.define('manage.store.attendance.AttendanceTime', {
	extend : 'manage.store.ComboBox',
	autoLoad : {
        start: 0,
        limit: -1
    },
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=s00008&time='+ new Date(), //1-10,
		//extraParams = [[]]
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}

});