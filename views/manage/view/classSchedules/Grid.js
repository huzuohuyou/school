Ext.define('manage.view.classSchedules.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.classSchedulesgrid',
	initComponent : function() {
		var store = Ext.create('manage.store.classSchedules.ClassSchedules');
		Ext.apply(this, {
			store : store,
			tbar : [ {
				iconCls : 'query',
				xtype : 'button',
				hidden : session.authority.indexOf('b31201') > -1 ? false : true,
				action : 'query',
				text : '查询'
			}],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [ {
				text : '学校',
				dataIndex : 'number',
				flex : 1
			}, {
				text : '学校名称',
				dataIndex : 'name',
				flex : 1
			},
			 {
				text : '负责人',
				dataIndex : 'saler_name',
				flex : 1
			},
			{
				text : '创建时间',
				dataIndex : 'createtime',
				flex : 1,
			},
			{
				text : '详细',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '查看详细情况',
				action : 'check',
			//	width : 100,
				align : 'center',
				icon : 'resources/images/icons/view.png',
				hidden : (session.authority.indexOf('b31203') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b31203') > -1)
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