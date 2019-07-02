Ext.define('manage.view.teacherAttendanceStatistics.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.teacherAttendanceStatisticsgrid',
	initComponent : function() {
		var store = Ext.create('manage.store.teacherAttendanceStatistics.TeacherAttendanceStatistics');
		renderTo:Ext.getBody();
		var groupingFeature = Ext.create('Ext.grid.feature.Grouping',{
	        groupHeaderTpl: '教师: {name} ({rows.length} 个班)',
	      //  hideGroupedHeader: true
	    });
		Ext.apply(this, {
			store : store,
			tbar : [ {
				iconCls : 'query',
				xtype : 'button',
				hidden : session.authority.indexOf('b240201') > -1 ? false : true,
				action : 'query',
				text : '查询'
			}, '-',  {
				iconCls : 'query',
				xtype : 'button',
				action : 'attendenceToExcel',
				text : '按月导出excel',
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
				text : '学校名称',
				dataIndex : 'school_name',
				align:'center',
				flex : 2
			},
			{
				text : '课程名称',
				dataIndex : 'c_name',
				flex : 1
			},
			{
				text : '上课年级',
				dataIndex : 'stage',
				flex : 1
			},
			{
				text : '班级名称',
				dataIndex : 's_name',
				flex : 2,
				renderer : function(v) {
                    return "<span style='margin-right:10px'><a href='#' onclick='' style='text-decoration:none'>"+v+"</a></span>";
                }
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
			}
			],
			listeners: {
	            cellclick: function( thi, td, cellIndex, record, tr, rowIndex, e, eOpts) {
	            	if(cellIndex == 4)
	              {
	            		var formWin = createWin('查看出勤详情', 'teacherAttendanceStatisticsviewform');
	        			var grid = formWin.down('grid');
	        			formWin.down('form').form.findField('ssd_id').setValue(record.data.ssd_id);
	                	formWin.down('form').form.findField('t_id').setValue(record.data.teacher_id);
	                	var params = {
	              			  ssd_id: record.data.id,
	              			  t_id:record.data.teacher_id
	        	                };
	                	var store = grid.getStore();
	                    store.on("beforeload",
	                    function() {
	                        store.proxy.extraParams = params;
	                    });
	                    store.load();
	              }
	            }
	        }
		});
		this.callParent(arguments);
	}
});