Ext.define('manage.view.courses.TeacheramountGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.teacheramountgrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.courses.Teacheramount');
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
			columns : [ {
				text : '教师编号',
				dataIndex : 'number',
				flex : 1
			},
			{
				text : '教师姓名',
				dataIndex : 'name',
				flex : 1
			},
			{
				text : '级别',
				dataIndex : 'type',
				renderer :teacherrateRender,
				flex : 1
			},{
				text : '已用/未用',
				dataIndex : 'status',
				renderer :teacherstatusRender,
				flex : 1
			}
			]
		});
		this.callParent(arguments);
	}
});