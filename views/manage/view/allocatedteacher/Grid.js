Ext.define('manage.view.allocatedteacher.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.allocatedteachergrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.teacher.Allocatedteacher');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
			store : store,
			selModel : selModel,
			tbar : [ {
				iconCls : 'query',
				xtype : 'button',
				hidden : session.authority.indexOf('b40501') > -1 ? false : true,
				action : 'query',
				text : '查询'
			}
			],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [  {
				text : '教师编号',
				dataIndex : 'number',
				flex : 1
			},{
				text : '姓名',
				dataIndex : 't_name',
				flex : 1
			},
			{
				text : '学校名称',
				dataIndex : 's_name',
				flex : 1
			},
			{
				text : '科目',
				dataIndex : 'c_name',
				flex : 1
			},
			{
				text : '上课时间',
				align : 'center',
				dataIndex : 'week',
				flex : 1
			},
			{
				text : '地址',
				align : 'center',
				dataIndex : 'address',
				flex : 1
			},
			
			{
				text : '联系电话',
				dataIndex : 'phone',
				flex : 2
			},
			{
				text : '授课记录',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '查看',
				action : 'view',
				width : 80,
				align : 'center',
				icon : 'resources/images/icons/view.png',
				hidden : (session.authority.indexOf('b40505') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b40505') > -1)
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