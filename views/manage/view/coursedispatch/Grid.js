Ext.define('manage.view.coursedispatch.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.coursedispatchgrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.coursedispatch.Coursedispatch');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
			store : store,
			selModel : selModel,
			tbar : [ {
				iconCls : 'item-add',
				xtype : 'button',
				hidden : session.authority.indexOf('b120202') > -1 ? false : true,
				action : 'insert',
				text : '添加'
			}],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [
			 {
				text : '课程名称',
				dataIndex : 'c_name',
				flex : 1
			},{
				text : '学校',
				dataIndex : 's_name',
				flex : 1
			},{
				text : '班级名称',
				dataIndex : 'ssd_name',
				flex : 2
			},{
				text : '星期',
				dataIndex : 'week',
				flex : 0.5
			},
			{
				text : '上课时间',
				dataIndex : 'worktime',
				flex : 1
			},
			{
				text : '上课地点',
				dataIndex : 'address',
				flex : 1
			},
			{
				text : '审核状态',
				dataIndex : 'dispatch_status',
				renderer : dispatchStatus,
				flex : 1
			},
			{
				text : '查看申请',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '查看',
				action : 'view',
				width : 80,
				align : 'center',
				icon : 'resources/images/icons/view.png',
				hidden : (session.authority.indexOf('b120203') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b120203') > -1)
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