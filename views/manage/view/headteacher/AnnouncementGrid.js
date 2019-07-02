Ext.define('manage.view.headteacher.AnnouncementGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.headteacherannouncementgrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.headteacher.Announcement');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
			store : store,
			selModel : selModel,
			tbar : [ {
				iconCls : 'query',
				xtype : 'button',
				action : 'query',
				text : '查询'
			}, '-', {
				iconCls : 'item-add',
				xtype : 'button',
				hidden : session.authority.indexOf('b50504') > -1 ? false : true,
				action : 'insert',
				text : '添加'
			},'-', {
				iconCls : 'item-delete',
				xtype : 'button',
				hidden : session.authority.indexOf('b50502') > -1 ? false : true,
				action : 'delete',
				text : '删除'
			}],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [ {
				text : '时间',
				dataIndex : 'time',
				hideable : false,
				flex : 1
			},  {
				text : '标题',
				dataIndex : 'head',
				hideable : false,
				flex : 1
			},{
				text : '查看',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '查看',
				action : 'view',
				width : 60,
				align : 'center',
				icon : 'resources/images/icons/view.png'
			}, {
				text : '编辑',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '编辑',
				action : 'edit',
				width : 60,
				align : 'center',
				icon : 'resources/images/icons/edit.png',
				hidden : (session.authority.indexOf('b50503') > -1) ? false : true,
						isDisabled : function(view, rowIdx, colIdx, item, record) {
							if (session.authority.indexOf('b50503') > -1)
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