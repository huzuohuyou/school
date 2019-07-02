Ext.define('manage.view.shedules.AddStudentGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.addstudentgrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.shedules.AddStudent');
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
				hidden : session.authority.indexOf('b30710') > -1 ? false : true,
				action : 'delete',
				text : '删除'
			}],
			columns : [ {
				text : '教育ID',
				dataIndex : 'number',
				flex : 2
			},{
				text : '姓名',
				dataIndex : 'name',
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