Ext.define('manage.view.teacherrate.ClasscontentGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.classcontentgrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.teacherrate.Classcontent');
		Ext.apply(this, {
			store : store,
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [ {
				text : '学校',
				dataIndex : 'school_name',
				hideable : false,
				flex : 1
			},{
				text : '课程名称',
				dataIndex : 'c_name',
				hideable : false,
				flex : 1
			},{
				text : '班级名称',
				dataIndex : 's_name',
				hideable : false,
				flex : 1
			},{
				text : '标题',
				dataIndex : 'title',
				hideable : false,
				flex : 2
			}, 
			{
				text : '上传时间',
				dataIndex : 'time',
				hideable : false,
				flex : 2
			},
			{
				text : '查看',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '查看',
				action : 'viewclasscontent',
				width : 60,
				align : 'center',
				icon : 'resources/images/icons/view.png',
				hidden : (session.authority.indexOf('b140105') > -1) ? false : true,
				isDisabled : function(view, rowIdx, colIdx, item, record) {
					if (session.authority.indexOf('b140105') > -1)
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