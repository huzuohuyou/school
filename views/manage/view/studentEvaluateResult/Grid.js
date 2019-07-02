Ext.define('manage.view.studentEvaluateResult.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.studentEvaluateResultgrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.studentEvaluateResult.StudentEvaluateResult');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
			store : store,
			selModel : selModel,
			tbar : [ {
				iconCls : 'query',
				xtype : 'button',
				hidden : session.authority.indexOf('b210101') > -1 ? false : true,
				action : 'query',
				text : '查询'
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
				dataIndex : 'school_name',
				flex : 1
			},{
				text : '班级名称',
				dataIndex : 's_name',
				flex : 1
			},{
				text : '星期',
				dataIndex : 'week',
				flex : 1
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
				text : '学生评价列表',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '学生评价列表',
				action : 'studentList',
				width : 100,
				align : 'center',
				icon : 'resources/images/icons/edit.png',
				hidden : (session.authority.indexOf('b210102') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b210102') > -1)
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