Ext.define('manage.view.classSchedules.SignlistGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.signlistgrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.classSchedules.Signlist');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
			store : store,
			selModel : selModel,
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [          
			{
				text : '姓名',
				dataIndex : 'name',
				flex : 1
			},
			{
				text : '星期',
				dataIndex : 'week',
				flex : 1
			},
			{
				text : '状态',
				dataIndex : 'status',
				flex : 1
			}, {
				text : '代课教师',
				dataIndex : 'temp_teacher_name',
				flex : 1,
			},{
				text : '签到状态',
				dataIndex : 'states',
				renderer: teacherstateRender,
				flex : 1
			},
			{
				text : '记录时间',
				dataIndex : 'time',
				flex : 1,
			}
			]
		});
		this.callParent(arguments);
	}
});