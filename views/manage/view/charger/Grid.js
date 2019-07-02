Ext.define('manage.view.charger.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.chargergrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.charger.Charger');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
			store : store,
			selModel : selModel,
			tbar : [ {
				iconCls : 'query',
				xtype : 'button',
				hidden : session.authority.indexOf('b70101') > -1 ? false : true,
				action : 'query',
				text : '查询'
			}, '-', {
				iconCls : 'item-add',
				xtype : 'button',
				hidden : session.authority.indexOf('b70102') > -1 ? false : true,
				action : 'insert',
				text : '添加'
			}, '-', {
				iconCls : 'item-delete',
				xtype : 'button',
				hidden : session.authority.indexOf('b70104') > -1 ? false : true,
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
				flex : 0.5
			},{
				text : '姓名',
				dataIndex : 'name',
				flex : 0.8
			},{
				text : '性别',
				dataIndex : 'sex',
				renderer : sexRender,
				flex : 0.3
			},
			{
				text : '联系方式',
				dataIndex : 'telephone',
				flex : 1
			},
			{
				text : '工作时间',
				dataIndex : 'worktime',
				flex : 0.7
			},
			{
				text : '管理学校',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '管理学校',
				action : 'selectSchool',
				width : 80,
				align : 'center',
				icon : 'resources/images/icons/edit.png',
				hidden : (session.authority.indexOf('b70103') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b70103') > -1)
						return false;
					else
						return true;
				}
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
				hidden : (session.authority.indexOf('b70103') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b70103') > -1)
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