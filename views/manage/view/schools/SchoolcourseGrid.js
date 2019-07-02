Ext.define('manage.view.schools.SchoolcourseGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.schoolcoursegrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.schools.Schoolcourse');
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
				text : '课程类别',
				dataIndex : 'type',
				flex : 1
			},{
				text : '课程名称',
				dataIndex : 'name',
				flex : 1
			}
			]
		});
		this.callParent(arguments);
	}
});