Ext.define('manage.view.teacherlibrary.AddSchoolsGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.addschoolsgrid',
	initComponent : function() {
		var store = Ext.create('manage.store.teacher.AddTeacherSchools');
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
				text : '学校编号',
				dataIndex : 'number',
				flex : 1
			},{
				text : '学校名称',
				dataIndex : 'name',
				flex : 1
			},
			{
				text : '学校类型',
				dataIndex : 'type',
				renderer :schooltypeRender,
				flex : 1
			},
			{
				text : '学校所在区',
				dataIndex : 'area',
				flex : 1
			}
			]
		});
		this.callParent(arguments);
	}
});