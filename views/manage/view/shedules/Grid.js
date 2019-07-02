Ext.define('manage.view.shedules.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.shedulesgrid',
	initComponent : function() {
		var store = Ext.create('manage.store.shedules.Shedules');
		Ext.apply(this, {
			store : store,
			tbar : [{
				iconCls : 'query',
				xtype : 'button',
				hidden : session.authority.indexOf('b90101') > -1 ? false : true,
				action : 'query',
				text : '查询'
			}],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [{
				text : '课表名称',
				dataIndex : 'name',
				flex : 1
			},{
				text : '学校名称',
				dataIndex : 's_name',
				flex : 1
			}, {
				text : '年份',
				dataIndex : 'year',
				flex : 0.6
			 },
			 {
				text : '学期',
				dataIndex : 'term',
				flex : 0.7,
				renderer:preCoursesTerm
		     }, {
				text : '负责人',
				dataIndex : 'charger_name',
				flex : 1
			},
			{
				text : '创建时间',
				dataIndex : 'time',
				flex : 1,
			},{
				text : '查看',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '排课',
				action : 'addshedules',
				width : 60,
				align : 'center',
				icon : 'resources/images/icons/paike.png',
				hidden : (session.authority.indexOf('b90103') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b90103') > -1)
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