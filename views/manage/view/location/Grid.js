Ext.define('manage.view.location.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.locationgrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.location.Location');
		var groupingFeature = Ext.create('Ext.grid.feature.Grouping',{
	        groupHeaderTpl: '班级: {name}',
	        hideGroupedHeader: true
	    });
		Ext.apply(this, {
			features: [groupingFeature],
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
			columns : [{
				text : '班级',
				dataIndex : 'c_name',
				hideable : false,
				flex : 1
			}, {
				text : '学号',
				dataIndex : 's_number',
				hideable : false,
				flex : 1
			}, {
				text : '姓名',
				dataIndex : 's_name',
				hideable : false,
				flex : 1
			}, {
				text : '时间',
				dataIndex : 'time',
				hideable : false,
				flex : 1
			}, {
				text : '地点',
				dataIndex : 'location',
				hideable : false,
				flex : 1
			},  {
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