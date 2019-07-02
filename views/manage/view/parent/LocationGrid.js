Ext.define('manage.view.parent.LocationGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.parentlocationgrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.parent.Location');
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
				text : '时间',
				dataIndex : 'time',
				hideable : false,
				flex : 1
			},{
				text : '地点',
				dataIndex : 'location',
				hideable : false,
				flex : 1
			}, {
				text : '状态',
				dataIndex : 'status',
				hideable : false,
				renderer : locationRender,
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
			}
			]
		});
		this.callParent(arguments);
	}
});