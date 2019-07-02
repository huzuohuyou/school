Ext.define('manage.view.shedulesgather.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.shedulesgathergrid',
	initComponent : function() {
		var store = Ext.create('manage.store.shedulesgather.Shedulesgather');
		var groupingFeature = Ext.create('Ext.grid.feature.Grouping',{
	        groupHeaderTpl: '学校: {name} ({rows.length} 个班)',
	      //  hideGroupedHeader: true
	    });
		Ext.apply(this, {
			store : store,
			features: [groupingFeature],
			tbar : [ {
				iconCls : 'query',
				xtype : 'button',
				hidden : session.authority.indexOf('b240101') > -1 ? false : true,
				action : 'query',
				text : '查询'
			}, '-', {
				iconCls : 'query',
				xtype : 'button',
				hidden : session.authority.indexOf('b240102') > -1 ? false
						: true,
				action : 'shedulesexcel',
				text : '导出excel',
			}],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [{
				text : '学校名称',
				dataIndex : 'school_name',
				flex : 1.5
			}, {
				text : '星期',
				dataIndex : 'week',
				renderer : weekRender,
				flex : 0.5,
			},{
				text : '课程名称',
				dataIndex : 'c_name',
				flex : 1,
			},
			{
				text : '上课年级',
				dataIndex : 'stage',
				flex : 0.5,
			},
			{
				text : '班级名称',
				dataIndex : 's_name',
				flex : 1.7,
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
				flex : 0.8,
			},
			{
				text : '联系电话',
				dataIndex : 'phone',
				flex : 1,
			},
			{
				text : '机构',
				dataIndex : 'agency',
				flex : 0.8,
			}
			]
		});
		this.callParent(arguments);
	}
});