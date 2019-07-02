Ext.define('manage.view.manager.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.managergrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.manager.Manager');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
			store : store,
			selModel : selModel,
			tbar : [{
				iconCls : 'item-add',
				xtype : 'button',
				hidden : session.authority.indexOf('b10302') > -1 ? false : true,
				action : 'insert',
				text : '添加'
			}, '-', {
				iconCls : 'item-delete',
				xtype : 'button',
				hidden : session.authority.indexOf('b10304') > -1 ? false : true,
				action : 'delete',
				text : '删除'
			}],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [ {
				text : '姓名',
				dataIndex : 'name',
				hideable : false,
				flex : 1
			}, {
				text : '用户名',
				dataIndex : 'loginname',
				hideable : false,
				flex : 1
			},{
				text : '角色',
				dataIndex : 'role_name',
				hideable : false,
				flex : 2
			},
			{
				text : '手机号',
				dataIndex : 'telephone',
				hideable : false,
				flex : 2
			},
			{
				text : '编辑',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '编辑',
				action : 'edit',
				width : 60,
				align : 'center',
				icon : 'resources/images/icons/edit.png',
				hidden : (session.authority.indexOf('b10303') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b10303') > -1)
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