Ext.define('manage.view.message.SendMessageGrid', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.sendmessagegrid',
	initComponent : function() {
		var store = Ext.create('manage.store.message.Message',{proxy : {
			type : 'ajax',
			url : 'system.do?action=queryByCondition&funcId=s90101&send_del=1&sender='+session.id,
			reader : {
				type : 'json',
				root : 'data',
				totalProperty : 'totalCount',
				successProperty : 'success'
			}
		},
		autoLoad : true
		});
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
			store : store,
			id : 'sendMessageGrid',
			selModel : selModel,
			header : false,
			region : 'center',
			autoScroll : true,
			tbar : [ {
				iconCls : 'query',
				xtype : 'button',
				action : 'query',
				text : '查询'
			}, '-', {
				iconCls : 'item-delete',
				xtype : 'button',
				action : 'delete',
				text : '删除'
			} ],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			buttonAlign : 'center',
			columns : [ {
				text : '标题',
				dataIndex : 'title',
				hideable : false,
				sortable : false,
				flex : 3
			}, {
				text : '接收人',
				dataIndex : 'receiver_name',
				sortable : false,
				flex : 1
			},{
				text : '发送时间',
				dataIndex : 'send_time',
				hideable : false,
				sortable : false,
				flex : 2
			}, {
				text : '已读',
				dataIndex : 'read_status',
				sortable : false,
				flex : 1
			},
			{
				xtype : 'actioncolumn',
				text : '查看',
				action : 'view',
				hideable : false,
				menuDisabled : true,
				align : 'center',
				icon : 'resources/images/view.png',
				width : 60
			}
			]
		});
		this.callParent(arguments);
	}
});