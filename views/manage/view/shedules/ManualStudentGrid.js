Ext.define('manage.view.shedules.ManualStudentGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.manualstudentgrid',
	initComponent : function() {
		var store = Ext.create('manage.store.shedules.ManualStudent');
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
				iconCls : 'query',
				xtype : 'button',
				action : 'query',
				text : '查询'
			}],
			columns : [ {
				text : '教育ID',
				dataIndex : 'number',
				flex : 3
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
				dataIndex : 'class_id',
				flex : 2
			}
			]
		});
		this.callParent(arguments);
	}
});