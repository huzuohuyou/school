Ext.define('manage.view.banner.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.bannergrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.banner.Banner');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
			store : store,
			selModel : selModel,
			tbar : [ {
				iconCls : 'query',
				xtype : 'button',
				hidden : session.authority.indexOf('b20501') > -1 ? false : true,
				action : 'query',
				text : '查询'
			}],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [{
				text : '标题',
				dataIndex : 'title',
				hideable : false,
				flex : 2
			},{
				text : '链接',
				dataIndex : 'imgurl',
				hideable : false,
				flex : 2
			},{
				text : '说明',
				dataIndex : 'information',
				hideable : false,
				flex : 3
			}, {
				text : '编辑',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '编辑',
				action : 'edit',
				width : 60,
				align : 'center',
				icon : 'resources/images/icons/edit.png',
				hidden : (session.authority.indexOf('b20503') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b20503') > -1)
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