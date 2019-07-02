Ext.define('manage.view.parent.TeacherGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.parentteachergrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.parent.Teacher');
		Ext.apply(this, {
			store : store,
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [  {
				text : '科目',
				dataIndex : 'course_name',
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
			},{
				text : '民族',
				dataIndex : 'race',
				flex : 1
			},{
				text : '出生日期',
				dataIndex : 'birthday',
				flex : 1
			},{
				text : '联系电话',
				dataIndex : 'phone',
				flex : 1
			}, {
				text : '联系老师',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '联系老师',
				action : 'contact',
				width : 80,
				align : 'center',
				icon : 'resources/images/icons/edit.png'
			
			}
			]
		});
		this.callParent(arguments);
	}
});