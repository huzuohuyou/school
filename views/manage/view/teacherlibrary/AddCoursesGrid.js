Ext.define('manage.view.teacherlibrary.AddCoursesGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.addcoursesgrid',
	initComponent : function() {
		var store = Ext.create('manage.store.teacher.AddTeacherCourses');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
			store : store,
			selModel : selModel,
			tbar : [ 
			 {
				iconCls : 'query',
				xtype : 'button',
				action : 'query',
				text : '查询'
			}
			],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [ {
				text : '课程编号',
				dataIndex : 'number',
				flex : 2
			},{
				text : '课程名称',
				dataIndex : 'name',
				flex : 2
			},
			{
				text : '课程类型',
				dataIndex : 'type_name',
				flex : 2
			},
			{
				text : '适合年级',
				dataIndex : 'stage',
				flex : 1
			}
			]
		});
		this.callParent(arguments);
	}
});