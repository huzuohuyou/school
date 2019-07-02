Ext.define('manage.view.teachersign.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.teachersigngrid',	
	initComponent : function() {
		var store = Ext.create('manage.store.teachersign.School');
		Ext.apply(this, {
			store : store,
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [  {
				text : '学校编号',
				dataIndex : 'number',
				flex : 1
			},{
				text : '学校名称',
				dataIndex : 'name',
				flex : 1
			},{
				text : '学生数量',
				dataIndex : 'studentcount',
				flex : 1
			},{
				text : '联系人',
				dataIndex : 'linkman',
				flex : 1
			},{
				text : '联系方式',
				dataIndex : 'telephone',
				flex : 1
			},{
				text : '学校地址',
				dataIndex : 'address',
				flex : 1
			},
            {
				text : '查看教师名单',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '查看',
				action : 'view',
				width : 100,
				align : 'center',
				icon : 'resources/images/icons/view.png',
				hidden : (session.authority.indexOf('b180102') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b180102') > -1)
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