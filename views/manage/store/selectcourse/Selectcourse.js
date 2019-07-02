Ext.define('manage.store.selectcourse.Selectcourse', {
	extend : 'manage.store.Store',
	model : 'manage.model.selectcourse.Selectcourse',
	autoLoad : session.authority.indexOf('b80104')>-1?true:false,
			sorters : [{
		        property: 'week',
		        direction: 'ASC'
		    }],
	proxy : {
		type : 'ajax',
		url : 'system.do?action=query_selectcourses&funcId=f80104&id='+session.id,
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	},
	 groupField: 'week'
});