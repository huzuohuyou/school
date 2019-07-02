Ext.define('manage.view.teachercourse.CoursesGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.sign_coursesgrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.teachercourse.Teachersign');
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
				text : '学号',
				dataIndex : 'number',
				flex : 2
			},{
				text : '学生姓名',
				dataIndex : 'name',
				flex : 2
			},
			{
				text : '年级',
				dataIndex : 'grad',
				flex : 2
			},
			{
				text : '班级',
				dataIndex : 'class',
				flex : 2
			},
			{
				text : '状态',
				dataIndex : 'states',
				renderer:  studentstateRender,
				flex : 1,
			
			},

			{
				text : '签到',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '签到',
				action : 'edit',
				width : 80,
				align : 'center',
				icon : 'resources/images/icons/edit.png',
				hidden : (session.authority.indexOf('b120105') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b120105') > -1)
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