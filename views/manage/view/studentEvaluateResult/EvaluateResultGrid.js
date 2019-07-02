Ext.define('manage.view.studentEvaluateResult.EvaluateResultGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.evaluateresultgrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.studentEvaluateResult.EvaluateResultList');
		Ext.apply(this, {
			store : store,
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [ {
				text : '学号',
				dataIndex : 's_number',
				flex : 2
			},{
				text : '学生姓名',
				dataIndex : 'student_name',
				flex : 2
			},
			{
				text : '年级',
				dataIndex : 'grad',
				flex : 2
			},
			{
				text : '班级',
				dataIndex : 'class_id',
				flex : 2
			},
			{
				text : '评价总分',
				dataIndex : 'e_total',
				flex : 2
			},
			{
				text : '评价详情',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '评价详情',
				action : 'viewResult',
				width : 80,
				align : 'center',
				icon : 'resources/images/icons/edit.png',
				hidden : (session.authority.indexOf('b210103') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b210103') > -1)
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