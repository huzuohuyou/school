Ext.define('manage.store.courseteacher.Course', {
	extend : 'manage.store.ComboBox',
	autoLoad : {
        start: 0,
        limit: -1
    },
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=s00009&id='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});