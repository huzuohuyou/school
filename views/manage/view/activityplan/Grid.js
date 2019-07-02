Ext.define('manage.view.activityplan.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.activityplangrid',
	initComponent : function() {
		var store = Ext.create('manage.store.activityplan.Activityplan');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
			store : store,
			selModel : selModel,
			tbar : [ {
				iconCls : 'query',
				xtype : 'button',
				hidden : session.authority.indexOf('b220101') > -1 ? false : true,
				action : 'query',
				text : '查询'
			}, '-', {
				iconCls : 'item-add',
				xtype : 'button',
				hidden : session.authority.indexOf('b220102') > -1 ? false : true,
				action : 'insert',
				text : '添加'
			}, '-', {
				iconCls : 'item-delete',
				xtype : 'button',
				hidden : session.authority.indexOf('b220104') > -1 ? false : true,
				action : 'delete',
				text : '删除'
			}],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [  {
				text : '人员编号',
				dataIndex : 'number',
				flex : 1
			},{
				text : '姓名',
				dataIndex : 'name',
				flex : 1
			},{
				text : '性别',
				dataIndex : 'sex',
				renderer : sexRender,
				flex : 1
			},
			{
				text : '联系方式',
				dataIndex : 'phone',
				flex : 1
			},{
				text : '住址',
				dataIndex : 'address',
				flex : 1
			},{
				text : '邮箱',
				dataIndex : 'email',
				flex : 1
			},{
				text : '微信',
				dataIndex : 'weixin',
				flex : 1
			},{
				text : '编辑',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '编辑',
				action : 'edit',
				width : 60,
				align : 'center',
				icon : 'resources/images/icons/edit.png',
				hidden : (session.authority.indexOf('b220103') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b220103') > -1)
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