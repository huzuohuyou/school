Ext.define('manage.view.addSchool.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.addschoolgrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.schools.AddSchool');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
			store : store,
			selModel : selModel,
			tbar : [ {
				iconCls : 'query',
				xtype : 'button',
				hidden : session.authority.indexOf('b130201') > -1 ? false : true,
				action : 'query',
				text : '查询'
			}, '-', {
				iconCls : 'item-add',
				xtype : 'button',
				hidden : session.authority.indexOf('b130202') > -1 ? false : true,
				action : 'insert',
				text : '添加'
			},'-', {
				iconCls : 'item-delete',
				xtype : 'button',
				hidden : session.authority.indexOf('b130204') > -1 ? false : true,
				action : 'delete',
				text : '删除'
			}],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [ {
				text : '学校编号',
				dataIndex : 'number',
				flex : 1
			},{
				text : '学校名称',
				dataIndex : 'name',
				flex : 2
			},
			{
				text : '学校类型',
				dataIndex : 'type',
				flex : 1,
				renderer :schooltypeRender,
			},
			{
				text : '负责人',
				dataIndex : 'u_name',
				flex : 1
			},
			{
				text : '学校所在区',
				dataIndex : 'area',
				renderer :schoolAreaRender,
				flex : 1
			},
			{
				text : '学校地址',
				dataIndex : 'address',
				flex : 2
			},
			{
				text : '联系人',
				dataIndex : 'linkman',
				flex : 1
			},
			{
				text : '联系人电话',
				dataIndex : 'telephone',
				flex : 1
			},
			{
				text : '预计参与人数',
				dataIndex : 'studentcount',
				flex : 1
			},
			{
				text : '备注',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '学校备注',
				action : 'view',
			//	width : 80,
				align : 'center',
				icon : 'resources/images/icons/view.png',
				hidden : (session.authority.indexOf('b130205') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b130205') > -1)
						return false;
					else
						return true;
				}
			},
			{
				text : '编辑',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '编辑',
				action : 'edit',
			//	width : 60,
				align : 'center',
				icon : 'resources/images/icons/edit.png',
				hidden : (session.authority.indexOf('b130203') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b130203') > -1)
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