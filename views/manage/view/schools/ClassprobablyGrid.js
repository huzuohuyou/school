Ext.define('manage.view.schools.ClassprobablyGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.probably_classgrid',
	
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
			}
			]
		});
		this.callParent(arguments);
	}
});