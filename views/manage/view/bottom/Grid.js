
Ext.define('manage.view.bottom.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.bottomgrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.bottom.Bottom');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
			store : store,
			selModel : selModel,
			tbar : [ {
				iconCls : 'query',
				xtype : 'button',
				hidden : session.authority.indexOf('b20601') > -1 ? false : true,
				action : 'query',
				text : '查询'
			}],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [{
				text : '标签1',
				dataIndex : 'img1_label',
				hideable : false,
				flex : 2
			},{
				text : '标签2',
				dataIndex : 'img2_label',
				hideable : false,
				flex : 2
			},{
				text : '地址',
				dataIndex : 'address',
				hideable : false,
				flex : 2
			},{
				text : '联系人',
				dataIndex : 'contact_user',
				hideable : false,
				flex : 2
			},{
				text : '电话',
				dataIndex : 'phone',
				hideable : false,
				flex : 3
			},{
				text : '京备号',
				dataIndex : 'backup',
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
				hidden : (session.authority.indexOf('b20603') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b20603') > -1)
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