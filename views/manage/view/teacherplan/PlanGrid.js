Ext.define('manage.view.teacherplan.PlanGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.plangrid',
	initComponent : function() {
		var store = Ext.create('manage.store.teacherplan.Plan_detail');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
			store : store,
			selModel : selModel,
			tbar : [{
				iconCls : 'item-add',
				xtype : 'button',
				hidden : session.authority.indexOf('b160203') > -1 ? false : true,
				action : 'insert',
				text : '添加'
			}, '-', {
				iconCls : 'item-delete',
				xtype : 'button',
				hidden : session.authority.indexOf('b160204') > -1 ? false : true,
				action : 'delete',
				text : '删除'
			}],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [ {
				text : '教案名称',
				dataIndex : 'name',
				flex : 1
			}, {
				text : '上传时间',
				dataIndex : 'time',
				flex : 1
			},
			{
				text : '查看教案',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '查看',
				action : 'view',
				width : 80,
				align : 'center',
				icon : 'resources/images/icons/view.png',
				hidden : (session.authority.indexOf('b160205') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b160205') > -1)
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