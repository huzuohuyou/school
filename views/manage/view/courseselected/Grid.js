Ext.define('manage.view.courseselected.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.courseselectedgrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.courseselected.Courseselected');
		Ext.apply(this, {
			store : store,
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [{
				text : '课程名称',
				dataIndex : 'name',
				flex : 1
			},{
				text : '课程类型',
				dataIndex : 'type',
				renderer :courseTypeRender,
				flex : 1
			},
			{
				text : '课程级别',
				dataIndex : 'grade',
				renderer : coursegradeRender,
				flex : 1
			},
			{
				text : '上课时间',
				menuDisabled : true,
				dataIndex : 'week',
				renderer : weekRender,
				flex : 1
			},
			{
				text : '上课年级',
				dataIndex : 'stage',
				flex : 1
			},
			{
				text : '课程介绍',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '查看',
				action : 'view',
				width : 100,
				align : 'center',
				icon : 'resources/images/icons/view.png',
				hidden : (session.authority.indexOf('b80105') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b80105') > -1)
						return false;
					else
						return true;
				}
			},
			{
				text : '退课',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '选课',
				action : 'drop',
				width : 100,
				align : 'center',
				icon : 'resources/images/icons/tuike1.png',
				hidden : (session.authority.indexOf('b80206') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b80206') > -1)
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