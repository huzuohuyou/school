Ext.define('manage.view.teacherplan.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.teacherplangrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.teacherplan.Teacherplan');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
			store : store,
			selModel : selModel,
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [ {
				text : '课程名称',
				dataIndex : 'c_name',
				hideable : false,
				flex : 1
			},{
				text : '学校名称',
				dataIndex : 'school_name',
				hideable : false,
				flex : 1
			},{
				text : '班级名称',
				dataIndex : 's_name',
				hideable : false,
				flex : 1
			},{
				text : '上课时间',
				dataIndex : 'worktime',
				flex : 1
			},
			{
				text : '上课地点',
				dataIndex : 'address',
				flex : 1
			},{
				text : '上传教案',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '查看',
				action : 'uploadPlan',
				width : 80,
				align : 'center',
				icon : 'resources/images/icons/add.png',
				hidden : (session.authority.indexOf('b160202') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b160202') > -1)
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