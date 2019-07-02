Ext.define('manage.view.studentSignStatistics.StudentGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.studentSignStatisticsstudentgrid',
	initComponent : function() {
		var store = Ext.create('manage.store.studentSignStatistics.QueryStudent');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
			store : store,
			selModel : selModel,
			tbar : [{
				iconCls : 'query',
				xtype : 'button',
				action : 'querydate',
				text : '查询'
			},'-',{
				iconCls : 'item-add',
				xtype : 'button',
				action : 'studentgridexcel',
				text : '导出Excel'
			}],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [{
				text : '姓名',
				dataIndex : 'name',
				flex : 2
			},{
				text : '年级',
				dataIndex : 'grad',
				flex : 2
			},{
				text : '班级',
				dataIndex : 'class',
				flex : 2
			},{
				text : '出勤状态',
				dataIndex : 'states',
				renderer : studentstateRender,
				flex : 2
			}
			]
		});
		this.callParent(arguments);
	}
});