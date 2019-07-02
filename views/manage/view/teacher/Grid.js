Ext.define('manage.view.teacher.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.teachergrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.teacher.Teacher');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
			store : store,
		    selModel : selModel,
			tbar : [ {
				iconCls : 'query',
				xtype : 'button',
				hidden : session.authority.indexOf('b40101') > -1 ? false : true,
				action : 'query',
				text : '查询'
			}
			],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [ 
		     {
				text : '姓名',
				dataIndex : 'name',
				flex : 1,	
			},{
				text : '性别',
				dataIndex : 'sex',
				renderer : sexRender,
				flex : 1
			},
			{
				text : '联系电话',
				dataIndex : 'phone',
				flex : 1
			},	
			{
				text : '所属机构',
				align : 'center',
				dataIndex : 'agency_name',
				flex : 1
			},
			{
				text : '授课状态',
				dataIndex : 'classcount',
				renderer :teacherstatesRender,
				flex :1
			},
		    {
				text : '在职状态',
				dataIndex : 'status',
				renderer:teacherstatusRender,
				menuDisabled : true,
				hideable: false, 
				xtype : 'actioncolumn',
				tooltip : '编辑',
				action : 'editstatus',
				width : 100,
				align : 'center',
				//icon : 'resources/images/icons/edit.png',
				hidden : (session.authority.indexOf('b40103') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b40103') > -1)
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