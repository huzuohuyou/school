Ext.define('manage.view.parent.HomeworkGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.parenthomeworkgrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.parent.Homework');
		Ext.apply(this, {
			store : store,
			tbar : [ {
				iconCls : 'query',
				xtype : 'button',
				action : 'query',
				text : '查询'
			}],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [ {
				text : '日期',
				dataIndex : 'date',
				hideable : false,
				flex : 1
			}, {
				text : '科目',
				dataIndex : 'course_name',
				hideable : false,
				flex : 1
			}, {
				text : '查看',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '查看',
				action : 'view',
				width : 60,
				align : 'center',
				icon : 'resources/images/icons/view.png'
			}
			]
		});
		this.callParent(arguments);
	}
});