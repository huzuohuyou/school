Ext.define('manage.view.teacherAttendanceStatistics.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.teacherAttendanceStatisticsqueryform',
	items : [ {
		xtype : 'textfield',
		name : 'school_name',
		labelAlign : 'right',
		fieldLabel : '学校名称'
	},{
		xtype : 'textfield',
		name : 'c_name',
		labelAlign : 'right',
		fieldLabel : '课程名称'
	},{
		xtype : 'mycombo',
		fieldLabel : '星期',
		labelAlign : 'right',
		name : 'week',
		store:[["","全部"],["1","周一"],["2","周二"],["3","周三"],["4","周四"],["5","周五"],["6","周六"],["7","周日"]],
		editable : false,
	},{
		xtype : 'textfield',
		name : 't_name',
		labelAlign : 'right',
		fieldLabel : '教师姓名'
	}]
});