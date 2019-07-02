Ext.define('manage.view.teacherrate.RateGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.rategrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.teacherrate.Ratelist');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		
		Ext.apply(this, {
			store : store,
			selModel : selModel,
			tbar : [{
				iconCls : 'item-add',
				xtype : 'button',
				hidden : session.authority.indexOf('b140108') > -1 ? false : true,
				action : 'insert',
				text : '添加'
			}, '-', {
				iconCls : 'item-delete',
				xtype : 'button',
				hidden : session.authority.indexOf('b140109') > -1 ? false : true,
				action : 'delete',
				text : '删除'
			}],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [ 
			{
				text : '教师姓名',
				dataIndex : 'name',
				flex : 2
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
				tooltip : '查看评级内容',
				action : 'viewratedetail',
				width : 80,
				align : 'center',
				icon : 'resources/images/icons/view.png',
				hidden : (session.authority.indexOf('b140110') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b140110') > -1)
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