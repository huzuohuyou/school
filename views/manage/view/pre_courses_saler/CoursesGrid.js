Ext.define('manage.view.pre_courses_saler.CoursesGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.detail_courses_salergrid',
	
	initComponent : function() {
		var groupingFeature = Ext.create('Ext.grid.feature.Grouping',{
	        groupHeaderTpl: '星期: {name} ({rows.length} 个班)',
	      //  hideGroupedHeader: true
	    });
		var store = Ext.create('manage.store.pre_courses_saler.Pre_class_detail');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
			features: [groupingFeature],
			store : store,
			selModel : selModel,
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [ {
				text : '班级编号',
				dataIndex : 'id',
				flex : 1
			}, {
				text : '教师姓名',
				dataIndex : 'name',
				flex : 1
			}, {
				text : '所教课程',
				dataIndex : 'course_name',
				flex : 1,
			}, {
				text : '上课时间',
				dataIndex : 'week',
				flex : 1,
			},
			{
				text : '上课地点',
				dataIndex : 'address',
				flex : 1,
			},
			{
				text : '状态',
				dataIndex : 'states',
				renderer : classStatesRender,
				flex : 1,
			},{
				text : '是否接受',
				dataIndex : 'isaccept',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '接受',
				action : 'accept',
				width : 120,
				align : 'center',
				renderer:isacceptIconRender,
				
				//icon : 'resources/images/icons/no.png',
				hidden : (session.authority.indexOf('b31002') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b31002') > -1)
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