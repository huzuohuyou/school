Ext.define('manage.view.shedules.TeacherGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.shedules_teachergrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.shedules.Teacher');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			singleSelect:true
		});
		Ext.apply(this, {
			store : store,
			//sm:new Ext.grid.CheckboxSelectionModel(),
			selModel : selModel,
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [  {
				text : '教师编号',
				dataIndex : 'number',
				flex : 1
			},{
				text : '姓名',
				dataIndex : 'name',
				flex : 1
			},{
				text : '性别',
				dataIndex : 'sex',
				renderer : sexRender,
				flex : 1
			},
			{
				text : '教师等级',
				dataIndex : 'type',
				flex : 1
			},
			{
				text : '所属机构',
				dataIndex : 'agency',
				flex : 1
			},{
				text : '联系电话',
				dataIndex : 'phone',
				flex : 2
			}
			]
		});
		this.callParent(arguments);
	}
});