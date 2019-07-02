Ext.define('manage.view.salercheckingactivity.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.salercheckingactivitygrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.activity.SalerCheckingActivity');
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
			}],
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