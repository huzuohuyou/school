Ext.define('manage.view.agency.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.agencygrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.agency.Agency');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
			store : store,
			selModel : selModel,
			tbar : [ {
				iconCls : 'item-add',
				xtype : 'button',
				hidden : session.authority.indexOf('b40202') > -1 ? false : true,
				action : 'insert',
				text : '添加'
			}, '-', {
				iconCls : 'item-delete',
				xtype : 'button',
				hidden : session.authority.indexOf('b40204') > -1 ? false : true,
				action : 'delete',
				text : '删除'
			}],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [{
				text : '机构名称',
				dataIndex : 'name',
				flex : 1
			},{
				text : '联系电话',
				dataIndex : 'phone',
				flex : 1
			},
			{
				text : '通信地址',
				dataIndex : 'address',
				flex : 1
			},
			{
				text : '教师数量',
				dataIndex : 'teacheramount',
				flex : 1
			},
			{
				text : '已录用',
				dataIndex : 'employ',
				flex : 1
			},
			{
				text : '邮箱',
				dataIndex : 'email',
				flex : 1
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
				hidden : (session.authority.indexOf('b40203') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b40203') > -1)
						return false;
					else
						return true;
				}
			},
	
			]
		});
		this.callParent(arguments);
	}
});