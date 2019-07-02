Ext.define('manage.view.teacherresource.TeacherPlanGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.teacherplangrid',
	initComponent : function() {
		var store = Ext.create('manage.store.teacherresource.TeacherPlan_detail');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
			store : store,
			selModel : selModel,
			tbar : [ {
				iconCls : 'item-add',
				xtype : 'button',
				hidden : session.authority.indexOf('b250109') > -1 ? false : true,
				action : 'downloadAllPlans',
				text : '批量下载教案'
			}
			],
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
			}, {
				text : '标题',
				dataIndex : 'name',
				flex : 1
			}, {
				text : '上传时间',
				dataIndex : 'time',
				flex : 1
			},
			{
				text : '查看',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '查看',
				action : 'viewPlan',
				width : 80,
				align : 'center',
				icon : 'resources/images/icons/view.png',
				hidden : (session.authority.indexOf('b250110') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b250110') > -1)
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