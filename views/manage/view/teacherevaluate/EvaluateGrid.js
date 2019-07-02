Ext.define('manage.view.teacherevaluate.EvaluateGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.evaluategrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.teacherevaluate.Evaluatelist');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		
		Ext.apply(this, {
			store : store,
			selModel : selModel,
			tbar : [ {
				iconCls : 'item-add',
				xtype : 'button',
				hidden : session.authority.indexOf('b180203') > -1 ? false : true,
				action : 'insert',
				text : '添加'
			}, '-', {
				iconCls : 'item-delete',
				xtype : 'button',
				hidden : session.authority.indexOf('b180204') > -1 ? false : true,
				action : 'delete',
				text : '删除'
			}],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [
			{
				text:'标题',
				dataIndex: 'title',
				flex :2
			},
			{
				text : '评价时间',
				dataIndex : 'time',
				flex : 2
			},
			{
				text : '查看',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '查看评价内容',
				action : 'view',
				width : 80,
				align : 'center',
				icon : 'resources/images/icons/view.png',
				hidden : (session.authority.indexOf('b180205') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b180205') > -1)
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