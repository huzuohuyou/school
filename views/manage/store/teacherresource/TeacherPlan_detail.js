Ext.define('manage.store.teacherresource.TeacherPlan_detail', {
	extend : 'manage.store.Store',
	model : 'manage.model.teacherresource.TeacherPlan_detail',
	autoLoad : session.authority.indexOf('b250108')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f250108',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	},
	 groupField: 'c_name'
});