Ext.define('manage.view.qtactivity.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.qtgrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.qtactivity.QtActivity');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
			store : store,
			selModel : selModel,
			tbar : [ {
				iconCls : 'query',
				xtype : 'button',
				hidden : session.authority.indexOf('b500301') > -1 ? false : true,
				action : 'query',
				text : '查询'
			}, '-', {
				iconCls : 'item-add',
				xtype : 'button',
				hidden : session.authority.indexOf('b500302') > -1 ? false : true,
				action : 'insert',
				text : '添加'
			}, '-', {
				iconCls : 'item-delete',
				xtype : 'button',
				hidden : session.authority.indexOf('b500304') > -1 ? false : true,
				action : 'delete',
				text : '删除'
			}],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [ {
				text : '编号',
				dataIndex : 'id',
				renderer : function(v){
					 
				     return "QT"+v;
					},
				hideable : false,
				flex : 1
			},{
				text : '标题',
				dataIndex : 'title',
				hideable : false,
				flex : 2
			},{
				text : '活动类型',
				dataIndex : 'yxname',
				hideable : false,
				flex : 2
			},{
				text : '活动方案',
				dataIndex : 'f_name',
				hideable : false,
				renderer : function(value, cellMeta, record, rowIndex, columnIndex, store)  
				{  
					return '<a target="_blank" href=system.do?action=downloadFile&f_id='+record.data.f_id+'>'+record.data.f_name+'</a>'
				},
				flex : 4
			},{
				text : '适合年级',
				dataIndex : 'grade',
				hideable : false,
				flex : 1
			},{
				text : '行程天数',
				dataIndex : 'xcdays',
				hideable : false,
				flex : 1
			}, {
				text : '编辑',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '编辑',
				action : 'edit',
				width : 60,
				align : 'center',
				icon : 'resources/images/icons/edit.png',
				hidden : (session.authority.indexOf('b500303') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b500303') > -1)
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