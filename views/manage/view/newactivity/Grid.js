Ext.define('manage.view.newactivity.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.newactivitygrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.newactivity.Newactivity');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		
		Ext.apply(this, {
			store : store,
			selModel : selModel,
			tbar : [{
				iconCls : 'query',
				xtype : 'button',
				hidden : session.authority.indexOf('b260101') > -1 ? false : true,
				action : 'query',
				text : '查询'
			},{
				iconCls : 'item-add',
				xtype : 'button',
				hidden : session.authority.indexOf('b260102') > -1 ? false : true,
				action : 'insert',
				text : '添加'
			}, '-', {
				iconCls : 'item-delete',
				xtype : 'button',
				hidden : session.authority.indexOf('b260104') > -1 ? false : true,
				action : 'delete',
				text : '删除'
			}, '-', {
				iconCls : 'query',
				xtype : 'button',
				action : 'view',
				text : '活动日历'
			}
			],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [ {
				text : '序号',
				dataIndex : 'id',
				flex : 0.5
			},{
				text : '活动名称',
				dataIndex : 'name',
				flex : 2
			},{
				text : '销售人员',
				dataIndex : 'saler_name',
				flex : 1
			},{
				text : '活动主题',
				dataIndex : 'theme',
				flex : 1
			},{
				text : '活动类型',
				dataIndex : 'type',
				flex : 1
			},{
				text : '学校名称',
				dataIndex : 'school_name',
				flex : 2
			},{
				text : '创建时间',
				dataIndex : 'create_time',
				flex : 1,
				renderer:function(val){   
			           return val.substring(0,10);   
			}
			},
			
			//判定当前的值
			
			{
				text : '当前状态',
				dataIndex : 'status',
				flex : 1,
				renderer : salerActivityStatusRender
			},
			{
				text : '编辑',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '编辑',
				action : 'edit',
				width : 80,
				align : 'center',
				icon : 'resources/images/icons/edit.png',
				hidden : (session.authority.indexOf('b260103') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b260103') > -1)
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