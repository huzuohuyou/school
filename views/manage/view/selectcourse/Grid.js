Ext.define('manage.view.selectcourse.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.selectcoursegrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.selectcourse.Selectcourse');
		
		Ext.apply(this, {
			store : store,
			columns : [
			  {
				text : '课程名称',
				dataIndex : 'name',
				flex : 1
			},{
				text : '课程类型',
				dataIndex : 'type',
				renderer :courseTypeRender,
				flex : 1
			},
			{
				text : '课程级别',
				dataIndex : 'grade',
				renderer : coursegradeRender,
				flex : 1
			},
			{
				text : '上课时间',
				dataIndex : 'week',
				renderer : weekRender,
				flex : 1
			},
			{
				text : '上课年级',
				menuDisabled : true,
				dataIndex : 'stage',
				flex : 1
			},
			{
				text : '课程介绍',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '查看',
				action : 'view',
				width : 100,
				align : 'center',
				icon : 'resources/images/icons/view.png',
				hidden : (session.authority.indexOf('b80105') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b80105') > -1)
						return false;
					else
						return true;
				}
			},
			{
				text : '选课',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '选课',
				action : 'select',
				width : 100,
				align : 'center',
				icon : 'resources/images/icons/xuanke1.png',
				hidden : (session.authority.indexOf('b80106') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b80106') > -1)
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