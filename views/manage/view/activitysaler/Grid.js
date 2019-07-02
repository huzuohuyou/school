Ext.define('manage.view.activitysaler.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.activitysalergrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.activitysaler.Activitysaler');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
			store : store,
			selModel : selModel,
			tbar : [ {
				iconCls : 'query',
				xtype : 'button',
				hidden : session.authority.indexOf('b210501') > -1 ? false : true,
				action : 'query',
				text : '查询'
			}, '-', {
				iconCls : 'item-add',
				xtype : 'button',
				hidden : session.authority.indexOf('b210502') > -1 ? false : true,
				action : 'insert',
				text : '添加'
			}, '-', {
				iconCls : 'item-delete',
				xtype : 'button',
				hidden : session.authority.indexOf('b210504') > -1 ? false : true,
				action : 'delete',
				text : '删除'
			}],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [ {
				text : '活动编号',
				dataIndex : 'a_id',
				flex : 3
			},{
				text : '活动名称',
				dataIndex : 'name',
				flex : 3
			},{
				text : '活动时间',
				dataIndex : 'date',
				flex : 3
			},{
				text : '活动地点',
				dataIndex : 'site',
				flex : 3
			},{
				text : '参加学校',
				dataIndex : 'sc_name',
				flex : 3
			},{
				text : '班级数量',
				dataIndex : 'classcount',
				flex : 3
			},
			{
				text : '学生数量',
				dataIndex : 'amount',
				flex : 3
			},
			{
				text : '年级',
				dataIndex : 'stage',
				flex : 1
			},
			{
				text : '编辑',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '编辑',
				action : 'edit',
				width : 60,
				align : 'center',
				icon : 'resources/images/icons/edit.png',
				hidden : (session.authority.indexOf('b210503') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b210503') > -1)
						return false;
					else
						return true;
				}
			},
			{
				text : '查看备注',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '查看备注',
				action : 'view',
				width : 80,
				align : 'center',
				icon : 'resources/images/icons/view.png',
				hidden : (session.authority.indexOf('b210505') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b210505') > -1)
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