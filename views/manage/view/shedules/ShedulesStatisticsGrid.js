Ext.define('manage.view.shedules.ShedulesStatisticsGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.detail_shedulesstatisticsgrid',
	initComponent : function() {
		var store = Ext.create('manage.store.shedules.ShedulesStatistics');
		Ext.apply(this, {
			store : store,
			tbar : [ {
				iconCls : 'query',
				xtype : 'button',
				action : 'classesexcel',
				text : '导出Excel',
			}],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [{
				text : '班级名称',
				dataIndex : 's_name',
				flex : 2
			},
			{
				text : '星期',
				dataIndex : 'week',
				renderer : weekRender,
				flex : 0.5
			},
			{
				text : '人数',
				dataIndex : 'count',
				flex : 0.5
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
				text : '年级',
				dataIndex : 'stage',
				flex : 0.8
			},
			{
				text : '类别',
				dataIndex : 'type',
				renderer :courseTypeRender,
				flex : 0.8
			},
			{
				text : '级别',
				dataIndex : 'grade',
				renderer : coursegradeRender,
				flex : 0.8
			},
			{
				text : '开课日期',
				dataIndex : 'start_date',
				flex : 1
			},
			{
				text : '结课日期',
				dataIndex : 'end_date',
				flex : 1
			},
			{
				text : '开课周数',
				dataIndex : 'allcount',
				flex : 0.8
			},
			{
				text : '授课教师电话',
				dataIndex : 'phone',
				flex : 1
			}
			]
		});
		this.callParent(arguments);
	}
			
});