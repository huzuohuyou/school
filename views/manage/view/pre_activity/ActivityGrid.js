Ext.define('manage.view.pre_activity.ActivityGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.detail_activitygrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.pre_activity.Pre_Activity_Detail');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
			store : store,
			selModel : selModel,
			tbar : [{
				iconCls : 'item-add',
				xtype : 'button',
				hidden : session.authority.indexOf('b210202') > -1 ? false : true,
				action : 'insert',
				text : '添加'
			}, '-', {
				iconCls : 'item-delete',
				xtype : 'button',
				hidden : session.authority.indexOf('b210204') > -1 ? false : true,
				action : 'delete',
				text : '删除'
			}],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [ {
				text : '活动编号',
				dataIndex : 'number',
				flex : 1
			},{
				text : '活动名称',
				dataIndex : 'name',
				flex : 2
			},{
				text : '开始时间',
				dataIndex : 'starttime',
				flex : 1
			},{
				text : '结束时间',
				dataIndex : 'endtime',
				flex : 1
			},{
				text : '地点',
				dataIndex : 'address',
				flex : 1
			},{
				text : '人数',
				dataIndex : 'countmember',
				flex : 1
			},{
				text : '负责人',
				dataIndex : 'charge',
				flex : 1
			},{
				text : '是否参加',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '是否参加',
				action : 'edit',
				width : 60,
				align : 'center',
				icon : 'resources/images/icons/ok.png',
				hidden : (session.authority.indexOf('b210203') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b210203') > -1)
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