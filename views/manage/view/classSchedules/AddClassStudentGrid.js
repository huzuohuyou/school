Ext.define('manage.view.classSchedules.AddClassStudentGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.addclassstudentgrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.classSchedules.AddClassStudent');
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
			tbar : [{
				iconCls : 'item-delete',
				xtype : 'button',
				hidden : session.authority.indexOf('b31207') > -1 ? false : true,
				action : 'delete',
				text : '删除'
			}],
			columns : [ {
				text : '学号',
				dataIndex : 'number',
				flex : 1
			},{
				text : '姓名',
				dataIndex : 'name',
				flex : 1
			},{
				text : '年级',
				dataIndex : 'grad',
				flex : 1
			},
			{
				text : '班级',
				dataIndex : 'class',
				flex : 1
			}
			
			]
		});
		this.callParent(arguments);
	}
});