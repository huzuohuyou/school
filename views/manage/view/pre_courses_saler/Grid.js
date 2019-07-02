Ext.define('manage.view.pre_courses_saler.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.pre_courses_salergrid',
	initComponent : function() {
	
		var store = Ext.create('manage.store.pre_courses_saler.Pre_Courses_saler');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
		
			store : store,
			selModel : selModel,
			tbar : [ {
				iconCls : 'query',
				xtype : 'button',
				hidden : session.authority.indexOf('b31001') > -1 ? false : true,
				action : 'query',
				text : '查询'
			}],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [ {
				text : '课表编号',
				dataIndex : 'number',
				flex : 1
			}, {
				text : '学校名称',
				dataIndex : 'name',
				flex : 2
			},
			 {
				text : '负责人',
				dataIndex : 'saler_name',
				flex : 2
			},
			{
				text : '推荐数量',
				dataIndex : 'countcourses',
				flex : 1,
			}, {
				text : '创建时间',
				dataIndex : 'time',
				flex : 1,
			},{
				text : '推荐',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '推荐',
				action : 'addcourses',
				width : 60,
				align : 'center',
				icon : 'resources/images/icons/add.png',
				hidden : (session.authority.indexOf('b31011') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b31011') > -1)
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