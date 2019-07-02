Ext.define('manage.view.chargerSign.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.chargerSigngrid',
	title:'时间',
	initComponent : function() {
		var store = Ext.create('manage.store.chargerSign.ChargerSign');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
			store : store,
			selModel : selModel,
			
			tbar : [ {
				iconCls : 'query',
				xtype : 'button',
				hidden : session.authority.indexOf('b70201') > -1 ? false : true,
				action : 'query',
				text : '查询'
			}],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [  {
				text : '人员编号',
				dataIndex : 'number',
				flex : 1
			},{
				text : '姓名',
				dataIndex : 'name',
				flex : 1
			},{
				text : '性别',
				dataIndex : 'sex',
				renderer : sexRender,
				flex : 1
			},
			{
				text : '联系方式',
				dataIndex : 'telephone',
				flex : 1
			},{
				text : '出勤状态',
				dataIndex : 'states',
				flex : 1
			},{
				text : '考勤',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '考勤',
				action : 'chargerSign',
				width : 60,
				align : 'center',
				icon : 'resources/images/icons/kaoqin.png',
				hidden : (session.authority.indexOf('b70203') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b70203') > -1)
						return false;
					else
						return true;
				}
			},
	
			]
		});
		this.callParent(arguments);
	}
});