Ext.define('manage.view.classSchedules.StudentGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.detail_studentgrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.classSchedules.Pre_student_detail');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
			store : store,
			selModel : selModel,
			tbar : [{
				iconCls : 'item-add',
				xtype : 'button',
				hidden : session.authority.indexOf('b31205') > -1 ? false : true,
				action : 'insert',
				text : '添加'
			}, '-', {
				iconCls : 'item-delete',
				xtype : 'button',
				hidden : session.authority.indexOf('b31206') > -1 ? false : true,
				action : 'delete',
				text : '删除'
			}
			],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [          
			{
				text : '学号',
				dataIndex : 'number',
				flex : 1
			}, {
				text : '学生姓名',
				dataIndex : 'name',
				flex : 1
			}, {
				text : '年级',
				dataIndex : 'grad',
				flex : 1,
			}, {
				text : '班级',
				dataIndex : 'class',
				flex : 1,
			}
			]
		});
		this.callParent(arguments);
	}
});