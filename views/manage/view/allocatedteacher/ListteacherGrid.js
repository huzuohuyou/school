Ext.define('manage.view.allocatedteacher.ListteacherGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.listteachergrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.teacher.Listteacher');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
			store : store,
			selModel : selModel,
			tbar : [{
				iconCls : 'item-delete',
				xtype : 'button',
				hidden : session.authority.indexOf('b40504') > -1 ? false : true,
				action : 'delete',
				text : '删除'
			}],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [            
		    {
				text : '上课时间',
				dataIndex : 'time',
				flex : 2
			},{
				text : '星期',
				dataIndex : 'week',
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
				renderer:  studentstateRender,
				flex : 1
			},
			
			]
		});
		this.callParent(arguments);
	}
});