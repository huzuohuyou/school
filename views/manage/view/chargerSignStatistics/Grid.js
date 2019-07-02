Ext.define('manage.view.chargerSignStatistics.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.chargerSignStatisticsgrid',
	initComponent : function() {
		var store = Ext.create('manage.store.chargerSignStatistics.ChargerSignStatistics');
		Ext.apply(this, {
			store : store,
			tbar : [ {
				iconCls : 'query',
				xtype : 'button',
				hidden : session.authority.indexOf('b240501') > -1 ? false : true,
				action : 'query',
				text : '查询'
			}, '-',  {
				iconCls : 'query',
				xtype : 'button',
				action : 'toExcel',
				text : '导出excel'
			}],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [{
				text : '人员编号',
				dataIndex : 'number',
				flex : 1
			},{
				text : '姓名',
				dataIndex : 'c_name',
				flex : 1
			},{
				text : '联系方式',
				dataIndex : 'telephone',
				flex : 1
			},
	        {
				text : '出勤',
				dataIndex : 'chuqin',
				flex : 1
			}, {
				text : '迟到',
				dataIndex : 'chidao',
				flex : 1
			}, {
				text : '早退',
				dataIndex : 'zaotui',
				flex : 1
			}, {
				text : '缺勤',
				dataIndex : 'queqin',
				flex : 1
			}
			]
		});
		this.callParent(arguments);
	}
});