Ext.define('manage.view.pre_courses.CoursesGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.detail_coursesgrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.pre_courses.Pre_class_detail');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
			store : store,
			selModel : selModel,
			tbar : [{
				iconCls : 'item-add',
				xtype : 'button',
				hidden : session.authority.indexOf('b150102') > -1 ? false : true,
				action : 'insert',
				text : '我要推荐'
			}],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [{
				text : '课程名称',
				dataIndex : 'name',
				flex : 1
			}, {
				text : '课程类别',
				dataIndex : 'type',
				renderer :courseTypeRender,
				flex : 1,
			}, {
				text : '课程级别',
				dataIndex : 'grade',
				renderer : coursegradeRender,
				flex : 1,
			},
			{
				text : '年级',
				dataIndex : 'stage',
				flex : 1,
			},
			{
				text : '班级管理',
				menuDisabled : true,
				xtype : 'actioncolumn',  
				tooltip : '班级管理',
				action : 'classManage',
				width : 120,
				align : 'center',
				icon : 'resources/images/icons/edit.png',
				hidden : (session.authority.indexOf('b150104') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b150104') > -1)
						return false;
					else
						return true;
				}
			},
			{
				text : '删除课程',
				menuDisabled : true,
				xtype : 'actioncolumn',  
				tooltip : '删除课程',
				action : 'deletecourse',
				width : 120,
				align : 'center',
				icon : 'resources/images/icons/remove.png',
				hidden : (session.authority.indexOf('b150106') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b150106') > -1)
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