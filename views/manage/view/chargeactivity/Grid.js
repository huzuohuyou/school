Ext.define('manage.view.chargeactivity.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.chargeactivitygrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.activity.ChargeActivity');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
			store : store,
			selModel : selModel,
			tbar : [ {
				iconCls : 'query',
				xtype : 'button',
				hidden : session.authority.indexOf('b300101') > -1 ? false : true,
				action : 'query',
				text : '查询'
			}
//			, '-', {
//				iconCls : 'item-add',
//				xtype : 'button',
//				hidden : session.authority.indexOf('b300102') > -1 ? false : true,
//				action : 'insert',
//				text : '添加'
//			}, '-', {
//				iconCls : 'item-delete',
//				xtype : 'button',
//				hidden : session.authority.indexOf('b300104') > -1 ? false : true,
//				action : 'delete',
//				text : '删除'
//			}
			],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [ {
				text : '活动编号',
				dataIndex : 'activityNo',
				flex : 1
			},{
				text : '活动名称',
				dataIndex : 'name',
				flex : 2
			},{
				text : '活动价格',
				dataIndex : 'activityPrice',
				flex : 1
			},{
				text : '活动类型',
				dataIndex : 'activityType',
				flex : 1
			},{
				text : '适合年级',
				dataIndex : 'stage',
				flex : 1
			},{
				text : '活动状态',
				dataIndex : 'status',
				flex : 1,
				renderer : salerActivityStatusRender
			}, 
			{
				text : '查看工单',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '查看工单',
				action : 'workOrder',
				width : 80,
				align : 'center',
				icon : 'resources/images/icons/add.png',
				hidden : false ,
				isDisabled : false,
			}, 
//			{
//				text : '工单通过',
//				menuDisabled : true,
//				xtype : 'actioncolumn',
//				tooltip : '提交审核',
//				action : 'workOrderPass',
//				width : 80,
//				align : 'center',
//				icon : 'resources/images/icons/add.png',
//				hidden :  false ,
//				isDisabled : false
//			}, 
			{
				text : '查看合同',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '活动合同',
				action : 'viewContract',
				width : 80,
				align : 'center',
				icon : 'resources/images/icons/add.png',
				hidden :  false,
				isDisabled : false
			}, 
//			{
//				text : '策划通过',
//				menuDisabled : true,
//				xtype : 'actioncolumn',
//				tooltip : '策划通过',
//				action : 'planePass',
//				width : 80,
//				align : 'center',
//				icon : 'resources/images/icons/add.png',
//				hidden : false ,
//				isDisabled : false
//			}, 
			{
				text : '活动步骤',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '活动步骤',
				action : 'step',
				width : 80,
				align : 'center',
				icon : 'resources/images/icons/add.png',
				hidden : false ,
				isDisabled : false
			}, 
			{
				text : '活动介绍',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '活动介绍',
				action : 'view',
				width : 80,
				align : 'center',
				icon : 'resources/images/icons/view.png',
				hidden : false,
				isDisabled : false
					
			}
			]
		});
		this.callParent(arguments);
	}
});