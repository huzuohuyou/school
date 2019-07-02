Ext.define('manage.view.teacherevaluate.EvaluateTeacherListGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.evaluateteacherlistgrid',
	initComponent : function() {
		var groupingFeature = Ext.create('Ext.grid.feature.Grouping',{
	        groupHeaderTpl: '星期: {name} ({rows.length} 个班)',
	      //  hideGroupedHeader: true
	    });
		var store = Ext.create('manage.store.teacherevaluate.Teacherevaluate');
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
				text : '联系电话',
				dataIndex : 'phone',
				flex : 1.5
			},
			{
				text : '班级名称',
				dataIndex : 's_name',
				flex : 2
			},
			{
				text : '星期',
				dataIndex : 'week',
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
				text : '教师评价',
			//	dataIndex : 'isaccept',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '教师课堂表现评价',
				action : 'evaluate',
				width : 120,
				align : 'center',
				renderer:signIconRender,
				icon : 'resources/images/icons/operate.png',
				hidden : (session.authority.indexOf('b180203') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b180203') > -1)
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