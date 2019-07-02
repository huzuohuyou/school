Ext.define('manage.store.teacherresource.TeacherPic_detail', {
	extend : 'manage.store.Store',
	model : 'manage.model.teacherresource.TeacherPic_detail',
	autoLoad : session.authority.indexOf('b250105')>-1?true:false,
	proxy : {
		type : 'ajax',
		url : 'system.do?action=queryByCondition&funcId=f250105',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'totalCount',
			successProperty : 'success'
		}
	},
	 groupField: 'c_name'
});