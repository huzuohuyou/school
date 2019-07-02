Ext.define('manage.view.executewaitactivity.ActivityStudentGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.activitystudentgrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.activity.Student');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
			store : store,
			selModel : selModel,
			tbar : [{
				iconCls : 'item-add',
				xtype : 'button',
				action : 'uploadtudent',
				text : '导入学生名单'
			}],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [{
				text : '姓名',
				dataIndex : 'name',
				flex : 2
			},{
				text : '性别',
				dataIndex : 'sex',
				renderer:sexRender,
				flex : 2
			},{
				text : '所在学校',
				dataIndex : 'school_name',
				flex : 2
			},{
				text : '年级',
				dataIndex : 'grad',
				flex : 2
			},{
				text : '班级',
				dataIndex : 'class',
				flex : 2
			}
			]
		});
		this.callParent(arguments);
	}
});