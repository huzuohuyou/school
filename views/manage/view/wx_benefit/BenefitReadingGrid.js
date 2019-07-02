Ext.define('manage.view.wx_benefit.BenefitReadingGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.benefitreadinggrid',
	initComponent : function() {
		var store = Ext.create('manage.store.wx_benefit.BenefitReading');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
			store : store,
			selModel : selModel,
			tbar : [{
				iconCls : 'item-add',
				xtype : 'button',
				hidden : session.authority.indexOf('b351102') > -1 ? false : true,
				action : 'addReading',
				text : '添加'
			}, '-', {
				iconCls : 'item-delete',
				xtype : 'button',
				hidden : session.authority.indexOf('b351104') > -1 ? false : true,
				action : 'deleteReading',
				text : '删除'
			}],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [ {
				text : '标题',
				dataIndex : 'reading_title',
				flex : 1
			}, {
				text : '发布时间',
				dataIndex : 'reading_time',
				flex : 1
			},
			{
				text : '是否显示',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '查看',
				action : 'showOrNot',
				width : 80,
				hideable:false,
				align : 'center',
				icon : 'resources/images/icons/ok.png',
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if ((session.authority.indexOf('b351103') > -1)&&record.data.is_show =='1')
						return false;
					else
						return true;
				}
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
				hidden : (session.authority.indexOf('b351101') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b351101') > -1)
						return false;
					else
						return true;
				}
			}, 
			{
				text : '编辑',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '查看',
				action : 'edit',
				width : 80,
				align : 'center',
				icon : 'resources/images/icons/edit.png',
				hidden : (session.authority.indexOf('b351103') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b351103') > -1)
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