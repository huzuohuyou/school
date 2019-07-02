Ext.define('manage.view.teacherresource.TeacherPicQueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.teacherpicqueryform',
	items : [{
		xtype : 'textfield',
		name : 'c_name',
		labelAlign : 'right',
		fieldLabel : '课程名称'
	},{
		xtype : 'textfield',
		name : 'school_name',
		labelAlign : 'right',
		fieldLabel : '学校名称'
	}
	]
});