Ext.define('manage.view.shedules.Shedules_DetailGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.shedules_detailgrid',
	initComponent : function() {
		var store = Ext.create('manage.store.shedules.Classes_Detail');
		Ext.apply(this, {
			store : store,
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [{
				text : '班级名称',
				dataIndex : 's_name',
				flex : 2
			},{
				text : '星期',
				dataIndex : 'week',
				flex : 0.5,
				renderer : weekRender
			},{
				text : '人数',
				dataIndex : 'count',
				flex : 0.5
			},{
				text : '上课时间',
				dataIndex : 'worktime',
				flex : 1.5
			}, {
				text : '上课地点',
				dataIndex : 'address',
				flex : 1.5
			},
			{
				text : '授课教师',
				dataIndex : 'teacher_name',
				flex : 1
			},
			{
				text : '年级',
				dataIndex : 'stage',
				flex : 1,
				renderer : stageRender
			},
			{
				text : '状态',
				menuDisabled : true,
				dataIndex : 'status',
				xtype : 'actioncolumn',
				tooltip : '状态',
				action : 'status',
				align : 'center',
				width : 50,
				hidden : session.authority.indexOf('b90110') > -1?false:true,
				renderer : classStatusIconRender,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b90110') > -1)
						return false;
					else
						return true;
				}
			}, {
				text : '学生名单',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '查看学生名单',
				action : 'student',
				align : 'center',
				width : 80,
				hidden : session.authority.indexOf('b90107') > -1?false:true,
				icon : 'resources/images/icons/project_list.png',
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b90107') > -1)
						return false;
					else
						return true;
				}
			}, {
				text : '编辑',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '编辑',
				action : 'edit',
				align : 'center',
				width : 50,
				hidden : session.authority.indexOf('b90105') > -1?false:true,
				icon : 'resources/images/icons/edit.png',
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b90105') > -1)
						return false;
					else
						return true;
				}
			},
			{
				text : '删除',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '删除',
				action : 'deleteClass',
				align : 'center',
				width : 50,
				hidden : session.authority.indexOf('b90104') > -1?false:true,
				icon : 'resources/images/icons/remove.png',
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b90104') > -1)
						return false;
					else
						return true;
				}
			},
			{
				text : '其他信息',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '其他信息',
				action : 'viewOther',
				align : 'center',
				width : 80,
				hidden : session.authority.indexOf('b90104') > -1?false:true,
				icon : 'resources/images/icons/view.png',
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b90104') > -1)
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