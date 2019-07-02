Ext.define('manage.view.teacherlibrary.TeacherSchoolsGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.teacherschoolsgrid',
	initComponent : function() {
		var store = Ext.create('manage.store.teacher.TeacherSchools');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
			store : store,
			selModel : selModel,
			tbar : [{
				iconCls : 'item-delete',
				xtype : 'button',
				action : 'delete',
				text : '删除'
			},'-', {
				iconCls : 'item-add',
				xtype : 'button',
				action : 'add',
				text : '添加'
			}
			],
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