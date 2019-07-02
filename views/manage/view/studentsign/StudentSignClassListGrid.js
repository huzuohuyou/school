Ext.define('manage.view.studentsign.StudentSignClassListGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.studentsignclasslistgrid',
	initComponent : function() {
		var store = Ext.create('manage.store.studentsign.Classes');
		Ext.apply(this, {
			store : store,
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [  {
				text : '班级名称',
				dataIndex : 's_name',
				flex : 2
			},{
				text : '授课教师',
				dataIndex : 'teacher_name',
				flex : 1
			},{
				text : '星期',
				dataIndex : 'week',
				flex : 0.5
			},{
				text : '上课时间',
				dataIndex : 'worktime',
				flex : 1
			},{
				text : '上课地点',
				dataIndex : 'address',
				flex : 2
			},{
				text : '上课状态',
				dataIndex : 'status',
				flex : 0.5
			},
			{
				text : '代课教师',
				dataIndex : 'temp_teacher_name',
				flex : 1
			},
            {
				text : '查看学生名单',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '查看',
				action : 'view',
				width : 100,
				align : 'center',
				icon : 'resources/images/icons/view.png',
				hidden : (session.authority.indexOf('b170103') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b170103') > -1)
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