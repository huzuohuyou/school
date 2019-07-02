Ext.define('manage.view.pupil.AttendanceGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.pupilattendancegrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.pupil.Attendance');
//		var groupingFeature = Ext.create('Ext.grid.feature.Grouping',{
//	        groupHeaderTpl: '姓名: {name}',
//	        hideGroupedHeader: true
//	    });
		Ext.apply(this, {
			//features: [groupingFeature],
			store : store,
			tbar : [ {
				iconCls : 'query',
				xtype : 'button',
				hidden : session.authority.indexOf('b80601') > -1 ? false : true,
				action : 'query',
				text : '查询'
			}, '-', {
				iconCls : 'item-add',
				xtype : 'button',
				hidden : session.authority.indexOf('b80602') > -1 ? false : true,
				action : 'insert',
				text : '添加'
			}, '-', {
				iconCls : 'item-delete',
				xtype : 'button',
				hidden : session.authority.indexOf('b80604') > -1 ? false : true,
				action : 'delete',
				text : '删除'
			}],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [ {
				text : '考勤时间',
				dataIndex : 'typetime',
				flex : 1
			},{
				text : '记录时间',
				dataIndex : 'time',
				flex : 1
			},{
				text : '状态',
				dataIndex : 'states',
				renderer : attendancestateRender,
				flex : 1
			},{
				text : '查看',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '查看',
				action : 'view',
				width : 60,
				align : 'center',
				icon : 'resources/images/icons/view.png',
				hidden : (session.authority.indexOf('b80605') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b80605') > -1)
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
				width : 60,
				align : 'center',
				icon : 'resources/images/icons/edit.png',
				hidden : (session.authority.indexOf('b80603') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b80603') > -1)
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