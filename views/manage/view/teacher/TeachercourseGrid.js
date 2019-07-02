Ext.define('manage.view.teacher.TeachercourseGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.teachercoursegrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.teacher.Teachercourse');
		Ext.apply(this, {
		
			store : store,
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [ {
				text : '学校名称',
				dataIndex : 's_name',
				flex : 1
			},{
				text : '星期',
				dataIndex : 'week',
				flex : 1
			},{
				text : '课程',
				dataIndex : 'course_name',
				flex : 1
			},
			{
				text : '上课时间',
				dataIndex : 'worktime',
				flex : 1
			},
			{
				text : '上课地点',
				dataIndex : 'position',
				flex : 1
			}
			]
		});
		this.callParent(arguments);
	}
});