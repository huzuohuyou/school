Ext.define('manage.view.student_charger.StudentListGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.studentlist_chargergrid',
	
	initComponent : function() {
		var groupingFeature = Ext.create('Ext.grid.feature.Grouping',{
	        groupHeaderTpl: '年级: {name} ({rows.length} 人)',
	      //  hideGroupedHeader: true
	    });
		var store = Ext.create('manage.store.student_charger.Student');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
	
		Ext.apply(this, {
			features: [groupingFeature],
			store : store,
			selModel : selModel,
			tbar : [ {
				iconCls : 'query',
				xtype : 'button',
				hidden : session.authority.indexOf('b170202') > -1 ? false : true,
				action : 'query',
				text : '查询'
			}
			],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [  {
				text : '教育ID',
				dataIndex : 'number',
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
				text : '年级',
				dataIndex : 'grad',
				flex : 1
			},{
				text : '班级',
				dataIndex : 'class',
				flex : 1
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
				hidden : (session.authority.indexOf('b170205') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b170205') > -1)
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