Ext.define('manage.view.managerEvaluateResult.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.managerEvaluateResultgrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.managerEvaluateResult.ManagerEvaluateResult');
		Ext.apply(this, {
			store : store,
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [
			 {
				text : '评价时间',
				dataIndex : 'time',
				flex : 1
			},{
				text : '评价等级',
				dataIndex : 'type',
				renderer :teacherrateRender,
				flex : 1
			},
			{
				text : '查看评价内容',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '查看教务评价结果',
				action : 'viewManagerEvaluate',
				width : 100,
				align : 'center',
				icon : 'resources/images/icons/view.png',
				hidden : (session.authority.indexOf('b210202') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b210202') > -1)
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