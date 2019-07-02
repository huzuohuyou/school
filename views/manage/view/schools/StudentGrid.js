Ext.define('manage.view.schools.StudentGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.schoolsstudentgrid',
	
	initComponent : function() {
		var groupingFeature = Ext.create('Ext.grid.feature.Grouping',{
	        groupHeaderTpl: '年级: {name} ({rows.length} 个人)',
	      //  hideGroupedHeader: true
	    });
		var store = Ext.create('manage.store.schools.StudentList');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
			features: [groupingFeature],
			store : store,
			selModel : selModel,
			
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
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