Ext.define('manage.view.teacherrate.EvaluateViewGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.evaluateviewgrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.teacherrate.Teacherevaluate');
		Ext.apply(this, {
			store : store,
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [ 
			{
				text : '学校名称',
				dataIndex : 'school_name',
				flex : 2
			},
			{
				text : '课程名称',
				dataIndex : 'course_name',
				flex : 2
			},
			{
				text : '班级名称',
				dataIndex : 's_name',
				flex : 2
			},
			{
				text : '评价人',
				dataIndex : 'charger_name',
				flex : 2
			},
			{
				text:'标题',
				dataIndex: 'title',
				flex :2
			},
			{
				text : '评价时间',
				dataIndex : 'time',
				flex : 2
			},
			{
				text : '查看',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '查看评价内容',
				action : 'viewevaluatedetail',
				width : 80,
				align : 'center',
				icon : 'resources/images/icons/view.png',
				hidden : (session.authority.indexOf('b140104') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b140104') > -1)
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