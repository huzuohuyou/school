Ext.define('manage.view.teacherAttendanceManagent.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.teacherAttendanceManagentgrid',
	initComponent : function() {
		var groupingFeature = Ext.create('Ext.grid.feature.Grouping',{
	        groupHeaderTpl: '星期: {name} ({rows.length} 个班)',
	      //  hideGroupedHeader: true
	    });
		var store = Ext.create('manage.store.teacherAttendanceManagent.TeacherAttendanceManagent');
		var combo = new Ext.form.ComboBox({
			store : Ext.create('manage.store.ComboBox',{
				data : studentstateData
			}),
            queryMode : 'local'
		});
		Ext.apply(this, {
			store : store,
			features: [groupingFeature],
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
				flex : 1
			},
			{
				text : '星期',
				dataIndex : 'week',
				renderer : weekRender,
				flex : 1
			},
			{
				text : '上课时间',
				dataIndex : 'worktime',
				flex : 1
			},
			{
				text : '上课地点',
				dataIndex : 'address',
				flex : 1
			},
			{

				text : '应授课次',
				dataIndex : 'allcount',
				flex : 1
			},
			{

				text : '出勤次数',
				dataIndex : 'attendcount',
				flex : 1
			},
			{
				text : '迟到次数',
				dataIndex : 'latecount',
				flex : 1
			},
			{
				text : '调课次数',
				dataIndex : 'adjustcount',
				flex : 1
			},
			{
				text : '查看出勤记录',
			//	dataIndex : 'isaccept',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '查看授课记录',
				action : 'viewdetail',
				width : 120,
				align : 'center',
				icon : 'resources/images/icons/view.png',
				hidden : (session.authority.indexOf('b230102') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b230102') > -1)
						return false;
					else
						return true;
				}
			}
			]
		});
		this.callParent(arguments);
	}
});