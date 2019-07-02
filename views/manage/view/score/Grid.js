Ext.define('manage.view.score.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.scoregrid',
	initComponent : function() {
		var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
			clicksToMoveEditor : 1,
			saveBtnText : '保存',
			cancelBtnText : '取消',
			autoCancel : false
		});
		var groupingFeature = Ext.create('Ext.grid.feature.Grouping',{
	        groupHeaderTpl: '班级: {name} ({rows.length} 人)',
	        hideGroupedHeader: true
	    });
		var store = Ext.create('manage.store.score.Score');
		Ext.apply(this, {
			features: [groupingFeature],
			plugins : [ rowEditing ],
			store : store,
			tbar : [ {
				iconCls : 'query',
				xtype : 'button',
				hidden : session.authority.indexOf('b30601') > -1 ? false
						: true,
				action : 'query',
				text : '查询'
			},{
				iconCls : 'query',
				xtype : 'button',
				hidden :  true,
				action : 'excel',
				text : '导出excel'
			} ],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [ {
				text : '班级',
				menuDisabled : true,
				dataIndex : 'c_name',
				flex : 1
			}, {
				text : '学号',
				dataIndex : 'number',
				flex : 2
			}, {
				text : '姓名',
				dataIndex : 's_name',
				flex : 2
			}, {
				text : '分数',
				dataIndex : 'score',
				flex : 1,
				editor : {
					xtype : 'numberfield',
					minValue : 0
				}
			}, {
				text : 'id',
				hidden : true,
				dataIndex : 'id'
			} ]
		});
		this.callParent(arguments);
	}
});