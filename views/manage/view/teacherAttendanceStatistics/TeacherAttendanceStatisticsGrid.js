Ext.define('manage.view.teacherAttendanceStatistics.TeacherAttendanceStatisticsGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.teacherAttendanceStatisticsdetailgrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.teacherAttendanceStatistics.TeacherAttendanceStatisticsDetail');
		Ext.apply(this, {
			store : store,
			tbar : [{
				iconCls : 'item-add',
				xtype : 'button',
				action : 'toExcel',
				text : '导出Excel'
			}],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [{
				text : '教师姓名',
				dataIndex : 'teacher_name',
				flex : 1
			},
			{
				text : '课程名称',
				dataIndex : 'course_name',
				flex : 1
			},
			{
				text : '班级名称',
				dataIndex : 's_name',
				flex : 3
			},
			{
				text : '星期',
				dataIndex : 'week',
				renderer : weekRender,
				flex : 0.5
			},
			{
				text : '签到人',
				dataIndex : 'charger_name',
				flex : 1
			},
			{
				text : '签到时间',
				dataIndex : 'time',
				flex : 2
			},
			{
				text : '签到状态',
				dataIndex : 'states',
				renderer: teacherstateRender,
				flex : 1
			},
			{
				text : '代课状态',
				dataIndex : 'status',
				flex : 1
			},
			{
				text : '代课教师',
				dataIndex : 'temp_teacher_name',
				flex : 1
			}
			]
		});
		this.callParent(arguments);
	}
});