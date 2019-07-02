Ext.define('manage.view.wx_benefit.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.wx_benefitgrid',
	initComponent : function() {
		var store = Ext.create('manage.store.wx_benefit.Wx_benefit');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
			store : store,
			selModel : selModel,
			tbar : [ {
				iconCls : 'query',
				xtype : 'button',
				hidden : session.authority.indexOf('b351101') > -1 ? false : true,
				action : 'query',
				text : '查询'
			}, '-', {
				iconCls : 'item-add',
				xtype : 'button',
				hidden : session.authority.indexOf('b351102') > -1 ? false : true,
				action : 'insert',
				text : '添加'
			}, '-', {
				iconCls : 'item-delete',
				xtype : 'button',
				hidden : session.authority.indexOf('b351104') > -1 ? false : true,
				action : 'delete',
				text : '删除'
			}],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [ {
				text : '文章标题',
				dataIndex : 'title',
				hideable : false,
				menuDisabled : true,
				sortable :false,
				flex : 2
			},
			 {
				text : '页面标题',
				dataIndex : 'short_title',
				hideable : false,
				menuDisabled : true,
				sortable :false,
				flex : 2
			},
			{
				text : '发布时间',
				dataIndex : 'time',
				hideable : false,
				menuDisabled : true,
				sortable :false,
				flex : 2
			},
			{
				text : '是否置顶',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '查看',
				action : 'yes',
				width : 80,
				hideable:false,
				align : 'center',
				icon : 'resources/images/icons/ok.png',
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if ((session.authority.indexOf('b351103') > -1)&&record.data.stickie =='1')
						return false;
					else
						return true;
				}
			},
			{
				text : '相关阅读管理',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '相关阅读管理',
				action : 'reading',
				width : 100,
				align : 'center',
				icon : 'resources/images/icons/project_list.png',
				hidden : (session.authority.indexOf('b351103') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b351103') > -1)
						return false;
					else
						return true;
				}
			},
			{
				text : '查看',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '查看',
				action : 'view',
				width : 60,
				align : 'center',
				icon : 'resources/images/icons/view.png',
				hidden : (session.authority.indexOf('b351101') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b351101') > -1)
						return false;
					else
						return true;
				}
			}, {
				text : '编辑',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '编辑',
				action : 'edit',
				width : 60,
				align : 'center',
				icon : 'resources/images/icons/edit.png',
				hidden : (session.authority.indexOf('b351103') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b351103') > -1)
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