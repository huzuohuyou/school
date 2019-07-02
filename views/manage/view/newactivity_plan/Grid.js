Ext.define('manage.view.newactivity_plan.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.newactivity_plangrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.newactivity_plan.Newactivity_plan');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
			store : store,
			selModel : selModel,
			tbar : [{
				iconCls : 'query',
				xtype : 'button',
				hidden : session.authority.indexOf('b260201') > -1 ? false : true,
				action : 'query',
				text : '查询'
			}
			],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [ {
				text : '序号',
				dataIndex : 'id',
				flex : 1
			},{
				text : '活动名称',
				dataIndex : 'name',
				flex : 2
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
				flex : 1
			},{
				text : '创建时间',
				dataIndex : 'create_time',
				flex : 1,
				renderer:function(val){   
			           return val.substring(0,10);   
			}
			},{
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
				action : 'wedit',
				width : 80,
				align : 'center',
				icon : 'resources/images/icons/edit.png',
			//	hidden : (session.authority.indexOf('b260103') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b260203') > -1)
						return false;
					else
						return true;
				}
			}, 
			/*
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
			*/
			]
		});
		this.callParent(arguments);
	}
});