Ext.define('manage.store.teacher.Allocatedteacher', {
	extend : 'manage.store.Store',
	model : 'manage.model.teacher.Allocatedteacher',
	autoLoad : session.authority.indexOf('b40501')>-1?true:false,
	sorters : [ {
				property : 'number',
				direction : 'ASC'
			} ],
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f40501',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	}
});