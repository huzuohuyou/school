Ext.define('manage.view.shedules.StudentGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.shedulesstudentgrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.shedules.Student');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
			store : store,
			selModel : selModel,
			tbar : [{
				iconCls : 'item-add',
				xtype : 'button',
				hidden : session.authority.indexOf('b90108') > -1 ? false : true,
				action : 'selectstudent',
				text : '选择学生'
			}, '-', {
				iconCls : 'item-delete',
				xtype : 'button',
				hidden : session.authority.indexOf('b90109') > -1 ? false : true,
				action : 'delete',
				text : '删除'
			}, '-', {
				iconCls : 'resources/images/icons/application.png',
				xtype : 'button',
				hidden : session.authority.indexOf('b90111') > -1 ? false : true,
				action : 'manualInput',
				text : '手动添加'
			}],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [ {
				text : '学号',
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