Ext.define('manage.view.courseteacher.StudentGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.teacherstudentgrid',
	initComponent : function() {
		var store = Ext.create('manage.store.courseteacher.Student');
		var groupingFeature = Ext.create('Ext.grid.feature.Grouping',{
	        groupHeaderTpl: '班级: {name} ({rows.length} 人)',
	        hideGroupedHeader: true
	    });
		Ext.apply(this, {
			features: [groupingFeature],
			store : store,
			tbar : [ {
				iconCls : 'query',
				xtype : 'button',
				hidden : session.authority.indexOf('b60201') > -1 ? false : true,
				action : 'query',
				text : '查询'
			}],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [{
				text : '班级',
				menuDisabled : true,
				dataIndex : 'c_name',
				flex : 1
			},  {
				text : '学号',
				menuDisabled : true,
				dataIndex : 'number',
				flex : 1
			},{
				text : '姓名',
				menuDisabled : true,
				dataIndex : 'name',
				flex : 1
			},{
				text : '性别',
				menuDisabled : true,
				dataIndex : 'sex',
				renderer : sexRender,
				flex : 1
			},{
				text : '民族',
				menuDisabled : true,
				dataIndex : 'race',
				flex : 1
			},{
				text : '出生日期',
				menuDisabled : true,
				dataIndex : 'birthday',
				flex : 1
			},
            {
				text : '联系家长',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '联系家长',
				action : 'contact',
				width : 80,
				align : 'center',
				icon : 'resources/images/icons/view.png'
			},
            {
				text : '查看',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '查看',
				action : 'view',
				width : 60,
				align : 'center',
				icon : 'resources/images/icons/view.png',
				hidden : (session.authority.indexOf('b60202') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b60202') > -1)
						return false;
					else
						return true;
				}
			}
			]
		});
		this.callParent(arguments);
	}
});