Ext.define('manage.view.studentsign.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.studentsigngrid',
	initComponent : function() {
		var store = Ext.create('manage.store.studentsign.School');
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
				text : '查看班级列表',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '查看',
				action : 'view',
				width : 100,
				align : 'center',
				icon : 'resources/images/icons/view.png',
				hidden : (session.authority.indexOf('b170202') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b170202') > -1)
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