Ext.define('manage.view.classSchedules.TeacherGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.daiketeachergrid',
	initComponent : function() {
		var store = Ext.create('manage.store.classSchedules.Teacherlist');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true,
			mode: "single"
		});
		Ext.apply(this, {
			store : store,
			selModel : selModel,
			
			tbar : [ {
				iconCls : 'query',
				xtype : 'button',
				hidden : session.authority.indexOf('b31210') > -1 ? false : true,
				action : 'query',
				text : '查询'
			}
			],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [ {
				text : '班级编号',
				dataIndex : 'id',
				flex : 1
			}, {
				text : '教师姓名',
				dataIndex : 'name',
				flex : 1
			}, {
				text : '所教课程',
				dataIndex : 'course_name',
				flex : 1,
			}, {
				text : '上课时间',
				dataIndex : 'week',
				flex : 1,
			},
			{
				text : '上课地点',
				dataIndex : 'address',
				flex : 1,
			}
			]
		});
		this.callParent(arguments);
	}
});