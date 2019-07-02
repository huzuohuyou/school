Ext.define('manage.view.activity.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.activitygrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.activity.Activity');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
			store : store,
			selModel : selModel,
			tbar : [ {
				iconCls : 'query',
				xtype : 'button',
				hidden : session.authority.indexOf('b310101') > -1 ? false : true,
				action : 'query',
				text : '查询'
			}
//			, '-', {
//				iconCls : 'item-add',
//				xtype : 'button',
//				hidden : session.authority.indexOf('b310102') > -1 ? false : true,
//				action : 'insert',
//				text : '添加'
//			}, '-', {
//				iconCls : 'item-delete',
//				xtype : 'button',
//				hidden : session.authority.indexOf('b310104') > -1 ? false : true,
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
				hidden : (session.authority.indexOf('b310101') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b310101') > -1)
						return false;
					else
						return true;
				}
			}, 
//			{
//				text : '提交审核',
//				menuDisabled : true,
//				xtype : 'actioncolumn',
//				tooltip : '提交审核',
//				action : 'check',
//				width : 80,
//				align : 'center',
//				icon : 'resources/images/icons/add.png',
//				hidden : (session.authority.indexOf('b310108') > -1) ? false : true,
//				isDisabled : function(view, rowIdx, colIdx, item, record) {
//					if (session.authority.indexOf('b310108') > -1)
//						return false;
//					else
//						return true;
//				}
//			}, 
			{
				text : '查看合同',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '查看合同',
				action : 'uploadFile',
				width : 80,
				align : 'center',
				icon : 'resources/images/icons/add.png',
				hidden : (session.authority.indexOf('b310109') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b310109') > -1)
						return false;
					else
						return true;
				}
			}, 
//			{
//				text : '提交执行',
//				menuDisabled : true,
//				xtype : 'actioncolumn',
//				tooltip : '提交执行',
//				action : 'executeActivity',
//				width : 80,
//				align : 'center',
//				icon : 'resources/images/icons/add.png',
//				hidden : (session.authority.indexOf('b310110') > -1) ? false : true,
//				isDisabled : function(view, rowIdx, colIdx, item, record) {
//					if (session.authority.indexOf('b310110') > -1)
//						return false;
//					else
//						return true;
//				}
//			}, 
			{
				text : '活动进程',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '活动进程',
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
				hidden : (session.authority.indexOf('b310105') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b310105') > -1)
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