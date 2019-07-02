Ext.define('manage.view.parent.ScoreGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.parentscoregrid',
	initComponent : function() {
		var store = Ext.create('manage.store.parent.Score');
		var columns = [ {
			text : '科目',
			dataIndex : 'c_name',
			flex : 2
		}, {
			text : '分数',
			dataIndex : 'score',
			flex : 2
		}, {
			text : '单科排名',
			dataIndex : 'rank',
			flex : 2
		}];
		Ext.apply(this, {
			store : store,
			
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			tbar :[{
				iconCls : 'query',
				xtype : 'button',
				action : 'query',
				disabled : true,
				text : '查询'
			},'-', {
				iconCls : 'query',
				xtype : 'button',
				disabled : true,
				action : 'querytotal',
				text : '总成绩'
			}],
			columns : columns,
		});
		this.callParent(arguments);
	}
});