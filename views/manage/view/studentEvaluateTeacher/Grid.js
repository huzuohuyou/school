Ext.define('manage.view.studentEvaluateTeacher.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.studentEvaluateTeachergrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.studentEvaluateTeacher.StudentEvaluateTeacher');
		Ext.apply(this, {
			store : store,
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [{
				text : '教师姓名',
				dataIndex : 't_name',
				flex : 1
			},{
				text : '所教课程',
				dataIndex : 'course_name',
				flex : 1
			},
			{
				text : '班级名称',
				dataIndex : 's_name',
				flex : 1
			},
			{
				text : '上课时间',
				dataIndex : 'week',
				renderer : weekRender,
				flex : 1
			},
			{
				text : '评价状态',
				dataIndex : 'evaluate_status',
				renderer : teacherEvaluateRender,
				flex : 1
			},
			{
				text : '评价教师',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '评价教师',
				action : 'evaluate',
				width : 100,
				align : 'center',
				icon : 'resources/images/icons/view.png',
				hidden : (session.authority.indexOf('b200102') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b200102') > -1)
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