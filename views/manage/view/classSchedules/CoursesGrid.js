Ext.define('manage.view.classSchedules.CoursesGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.detail_classgrid',
	
	initComponent : function() {
		var groupingFeature = Ext.create('Ext.grid.feature.Grouping',{
	        groupHeaderTpl: '星期: {name} ({rows.length} 个班)',
	      //  hideGroupedHeader: true
	    });
		var store = Ext.create('manage.store.classSchedules.Pre_class_detail');
		Ext.apply(this, {
			features: [groupingFeature],
			store : store,
		//	selModel : selModel,
			tbar : [ {
				iconCls : 'query',
				xtype : 'button',
				hidden : session.authority.indexOf('b31201') > -1 ? false
						: true,
				action : 'query',
				text : '查询'
			}, '-', {
				iconCls : 'query',
				xtype : 'button',
				hidden : session.authority.indexOf('b31201') > -1 ? false
						: true,
				action : 'excel',
				text : '导出excel'
			}],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [  {
				text : '班级编号',
				dataIndex : 'id',
				flex : 1
			}, {
				text : '教师姓名',
				dataIndex : 'name',
				flex : 1
			}, 
			{
				text : '所教课程',
				dataIndex : 'course_name',
				flex : 1,
			},
			{
				text : '选课年级',
				dataIndex : 'grad',
				flex : 1,
			},
			{
				text : '星期',
				dataIndex : 'week',
				flex : 1,
			},
			 {
				text : '选课人数',
				dataIndex : 'amount',
				flex : 1,
			},	
			{
				text : '上课时间',
				dataIndex : 'worktime',
				flex : 2,
			},
			{
				text : '上课地点',
				dataIndex : 'position',
				flex : 2,
			},
			{
				text : '排班',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '排班',
				action : 'arrangeclass',
				width : 100,
				align : 'center',
				icon : 'resources/images/icons/config.png',
				hidden : (session.authority.indexOf('b31208') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b31208') > -1)
						return false;
					else
						return true;
				}
			},
			{
				text : '学生名单',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '查看',
				action : 'studentlist',
				width : 100,
				align : 'center',
				icon : 'resources/images/icons/member.png',
				hidden : (session.authority.indexOf('b31204') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b31204') > -1)
						return false;
					else
						return true;
				}
			},
			{
				text : '教师出勤情况',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '查看教师出勤情况',
				action : 'signlist',
				width : 100,
				align : 'center',
				icon : 'resources/images/icons/view.png',
				hidden : (session.authority.indexOf('b31209') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b31209') > -1)
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