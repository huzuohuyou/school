Ext.define('manage.view.studentSignStatistics.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.studentSignStatisticsgrid',
	initComponent : function() {
		var store = Ext.create('manage.store.studentSignStatistics.StudentSignStatistics');
		Ext.apply(this, {
			store : store,
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [{
				text : '学校名称',
				dataIndex : 'school_name',
				flex : 2
			}, {
				text : '星期',
				dataIndex : 'week',
				renderer : weekRender,
				flex : 1,
			},{
				text : '课程名称',
				dataIndex : 'c_name',
				flex : 2,
			},
			{
				text : '上课年级',
				dataIndex : 'stage',
				flex : 1,
			},
			{
				text : '班级名称',
				dataIndex : 's_name',
				flex : 2,
			},
			{
				text : '授课时间',
				dataIndex : 'worktime',
				flex : 1,
			},
			{
				text : '授课地点',
				dataIndex : 'address',
				flex : 1,
			},
			{
				text : '授课教师',
				dataIndex : 't_name',
				flex : 1,
			},{
				text : '学生考勤记录',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '学生考勤记录',
				action : 'viewStatistics',
				width : 100,
				align : 'center',
				icon : 'resources/images/icons/view.png'
			}
			]
		});
		this.callParent(arguments);
	}
});