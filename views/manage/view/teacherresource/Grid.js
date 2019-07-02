Ext.define('manage.view.teacherresource.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.teacherresourcegrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.teacherresource.Teacherresource');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
			store : store,
			selModel : selModel,
			tbar : [ {
				iconCls : 'query',
				xtype : 'button',
				hidden : session.authority.indexOf('b250101') > -1 ? false : true,
				action : 'query',
				text : '查询'
			}
			],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [ {
				text : '教师姓名',
				dataIndex : 'name',
				hideable : false,
				flex : 1
			},{
				text : '性别',
				dataIndex : 'sex',
				renderer : sexRender,
				flex : 1
			},{
				text : '教师等级',
				dataIndex : 'rate',
				renderer :teacherrateRender,
				flex : 1
			},{
				text : '所属机构',
				align : 'center',
				dataIndex : 'agency_name',
				flex : 1
			},
			{
				text : '联系电话',
				dataIndex : 'phone',
				flex : 1
			},{
				text : '图片下载',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '查看',
				action : 'downloadPicture',
				width : 80,
				align : 'center',
				icon : 'resources/images/icons/xiazai.png',
				hidden : (session.authority.indexOf('b250102') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b250102') > -1)
						return false;
					else
						return true;
				}
			},
			{
				text : '教案下载',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '查看',
				action : 'downloadPlan',
				width : 80,
				align : 'center',
				icon : 'resources/images/icons/folder.png',
				hidden : (session.authority.indexOf('b250103') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b250103') > -1)
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