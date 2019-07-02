Ext.define('manage.view.teachercourse.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.teachercoursegrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.teachercourse.Teachercourse');
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
			columns : [
			 {
				text : '课程名称',
				dataIndex : 'c_name',
				flex : 1
			},{
				text : '学校',
				dataIndex : 'school_name',
				flex : 1
			},{
				text : '班级名称',
				dataIndex : 's_name',
				flex : 1
			},{
				text : '星期',
				dataIndex : 'week',
				flex : 1
			},
			{
				text : '上课时间',
				dataIndex : 'worktime',
				flex : 1
			},
			{
				text : '上课地点',
				dataIndex : 'address',
				flex : 1
			},
			{
				text : '学生名单',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '签到',
				action : 'sign',
				width : 80,
				align : 'center',
				icon : 'resources/images/icons/edit.png',
				hidden : (session.authority.indexOf('b120103') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b120103') > -1)
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