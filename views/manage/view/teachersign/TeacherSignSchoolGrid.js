Ext.define('manage.view.teachersign.TeacherSignSchoolGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.teachersignschoolgrid',
	initComponent : function() {
	var store = Ext.create('manage.store.teachersign.Teachersign');
	Ext.apply(this, {
			store : store,
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [{
				text : '教师姓名',
				dataIndex : 'teacher_name',
				flex : 1
			},
			{
				text : '联系电话',
				dataIndex : 'phone',
				flex : 1.5
			},
			{
				text : '班级名称',
				dataIndex : 's_name',
				flex : 2.5
			},
			{
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

				text : '出勤状态',
				dataIndex : 'status',
				flex : 1
			},
			{

				text : '代课教师',
				dataIndex : 'temp_teacher_name',
				flex : 1
			},
			{
				text : '签到状态',
				dataIndex : 'states',
				renderer: teacherstateRender,
				flex : 1
			},
			{
				text : '签到',
			//	dataIndex : 'isaccept',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '签到',
				action : 'sign',
				width : 120,
				align : 'center',
				renderer:signIconRender,
				icon : 'resources/images/icons/edit.png',
				hidden : (session.authority.indexOf('b180103') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b180103') > -1)
						return false;
					else
						return true;
				}
			},
			{
				text : '教师评价',
			//	dataIndex : 'isaccept',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '教师课堂表现评级',
				action : 'evaluate',
				width : 120,
				align : 'center',
				renderer:signIconRender,
				icon : 'resources/images/icons/operate.png',
				hidden : (session.authority.indexOf('b120206') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b120206') > -1)
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