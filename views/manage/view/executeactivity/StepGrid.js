Ext.define('manage.view.executeactivity.StepGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.stepgrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.activity.StepRecord');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
			store : store,
			selModel : selModel,
//			tbar : [ {
//				iconCls : 'query',
//				xtype : 'button',
//				hidden : session.authority.indexOf('b330101') > -1 ? false : true,
//				action : 'query',
//				text : '查询'
//			}],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [{
				text : '步骤名称',
				dataIndex : 'name',
				flex : 1
			},{
				text : '步骤介绍',
				dataIndex : 'introduction',
				flex : 1
			},{
				text : '执行时间',
				dataIndex : 'createTime',
				flex : 1
			},{
				text : '执行状态',
				dataIndex : 'recordStatus',
				renderer : stepRecordStatus,
				flex : 1
			},{
				text : '确认执行',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '确认执行',
				action : 'activityStepExecute',
				width : 80,
				align : 'center',
				icon : 'resources/images/icons/ok.png',
				hidden : false ,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
                    if (record.data.recordStatus == 1) return true;
                    else return false;
                }
			}
			
			]
		});
		this.callParent(arguments);
	}
});