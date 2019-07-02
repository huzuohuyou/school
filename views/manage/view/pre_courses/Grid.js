Ext.define('manage.view.pre_courses.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.pre_coursesgrid',
	initComponent : function() {
		var store = Ext.create('manage.store.pre_courses.Pre_Courses');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
			store : store,
			selModel : selModel,
			tbar : [{
				iconCls : 'query',
				xtype : 'button',
				hidden : session.authority.indexOf('b150101') > -1 ? false : true,
				action : 'query',
				text : '查询'
			}, '-', {
				iconCls : 'item-add',
				xtype : 'button',
				hidden : session.authority.indexOf('b150103') > -1 ? false : true,
				action : 'addTerm',
				text : '添加'
			}, '-', {
				iconCls : 'item-delete',
				xtype : 'button',
				hidden : session.authority.indexOf('b150108') > -1 ? false : true,
				action : 'deleteShedules',
				text : '删除'
			}],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [{
				text : '课表名称',
				dataIndex : 'name',
				flex : 2
			},
			{
				text : '学校名称',
				dataIndex : 's_name',
				flex : 2
			 },
			 {
				text : '年份',
				dataIndex : 'year',
				flex : 0.6
			 },
			 {
				text : '学期',
				dataIndex : 'term',
				flex : 0.7,
				renderer:preCoursesTerm
				 },
			 {
				text : '负责人',
				dataIndex : 'charger_name',
				flex : 0.6
			},
			{
				text : '推荐数量',
				dataIndex : 'countcourses',
				flex : 1,
			},
			{
				text : '创建时间',
				dataIndex : 'time',
				flex : 1.5,
			},
			{
				text : '状态',
				dataIndex : 'status',
				flex : 1,
				renderer : courseWarnStatus,
			},{
				text : '推荐课程',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '推荐',
				action : 'addcourses',
				width : 80,
				align : 'center',
				icon : 'resources/images/icons/add.png',
				hidden : (session.authority.indexOf('b150111')>-1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b150111') > -1)
						return false;
					else
						return true;
				}
			},{
				text : '排课提醒',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '销售课程完毕，提醒排课',
				action : 'warn',
				width : 80,
				align : 'center',
				icon : 'resources/images/icons/ok.png',
				hidden : (session.authority.indexOf('b150113') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b150113') > -1)
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