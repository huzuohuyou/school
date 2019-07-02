Ext.define('manage.view.activitydeleted.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.activitydeletedgrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.activitydeleted.Activitydeleted');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
			store : store,
			selModel : selModel,
			tbar : [ {
				iconCls : 'query',
				xtype : 'button',
				hidden : session.authority.indexOf('b210301') > -1 ? false : true,
				action : 'query',
				text : '查询'
			}, '-', {
				iconCls : 'item-delete',
				xtype : 'button',
				hidden : session.authority.indexOf('b210304') > -1 ? false : true,
				action : 'delete',
				text : '删除'
			}],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [ {
				text : '活动编号',
				dataIndex : 'a_id',
				flex : 3
			},{
				text : '活动名称',
				dataIndex : 'name',
				flex : 3
			},{
				text : '活动时间',
				dataIndex : 'date',
				flex : 3
			},{
				text : '活动地点',
				dataIndex : 'site',
				flex : 3
			},{
				text : '参加学校',
				dataIndex : 'sc_name',
				flex : 3
			},{
				text : '班级数量',
				dataIndex : 'classcount',
				flex : 3
			},
			{
				text : '学生数量',
				dataIndex : 'amount',
				flex : 3
			},
			{
				text : '年级',
				dataIndex : 'stage',
				flex : 1
			},
			{
				text : '负责人',
				dataIndex : 's_name',
				flex : 2
			},
			{
				text : '状态',
				dataIndex : 'status_id',
				renderer:  activitystateRender,
				flex : 2,
			},
			{
				text : '查看备注',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '查看备注',
				action : 'view',
				width : 80,
				align : 'center',
				icon : 'resources/images/icons/view.png',
				hidden : (session.authority.indexOf('b210305') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b210305') > -1)
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