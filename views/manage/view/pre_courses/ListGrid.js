Ext.define('manage.view.pre_courses.ListGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.listgrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.pre_courses.querycourses');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
			store : store,
			selModel : selModel,
			tbar : [ {
				iconCls : 'query',
				xtype : 'button',
				hidden : session.authority.indexOf('b150107') > -1 ? false : true,
				action : 'query',
				text : '查询'
			}
			],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [ {
				text : '课程编号',
				dataIndex : 'number',
				flex : 1
			}, {
				text : '课程名称',
				dataIndex : 'name',
				flex : 1
			}, {
				text : '课程类别',
				dataIndex : 'type',
				renderer :courseTypeRender,
				flex : 1,
			}, {
				text : '课程级别',
				dataIndex : 'grade',
				renderer : coursegradeRender,
				flex : 1,
			},
			{
				text : '年级',
				dataIndex : 'stage',
				flex : 1,
			}
			]
		});
		this.callParent(arguments);
	}
});