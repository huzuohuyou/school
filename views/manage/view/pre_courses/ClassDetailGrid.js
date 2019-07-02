Ext.define('manage.view.pre_courses.ClassDetailGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.classdetailgrid',
	initComponent : function() {
		var store = Ext.create('manage.store.pre_courses.Classes_Detail');
		Ext.apply(this, {
			store : store,
			tbar : [{
				iconCls : 'item-add',
				xtype : 'button',
				hidden : session.authority.indexOf('b150104') > -1 ? false : true,
				action : 'addClasses',
				text : '增加班级'
			}
			],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true,
				inputItemWidth:60
			}),
			columns : [{
				text : '班级名称',
				dataIndex : 's_name',
				flex : 2
			},{
				text : '星期',
				dataIndex : 'week',
				flex : 0.5,
				renderer : weekRender
			},{
				text : '人数',
				dataIndex : 'count',
				flex : 0.5
			},{
				text : '上课时间',
				dataIndex : 'worktime',
				flex : 1.5
			}, {
				text : '上课地点',
				dataIndex : 'address',
				flex : 1.5
			},
			{
				text : '开课日期',
				dataIndex : 'start_date',
				flex : 1
			},
			{
				text : '年级',
				dataIndex : 'stage',
				flex : 0.5,
				renderer : stageRender
			},
			{
				text : '编辑',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '编辑',
				action : 'editClass',
				align : 'center',
				width : 50,
				hidden : session.authority.indexOf('b150104') > -1?false:true,
				icon : 'resources/images/icons/edit.png',
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b150104') > -1)
						return false;
					else
						return true;
				}
			},
			{
				text : '删除',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '删除',
				action : 'deleteClass',
				align : 'center',
				width : 50,
				hidden : session.authority.indexOf('b150104') > -1?false:true,
				icon : 'resources/images/icons/remove.png',
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b150104') > -1)
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