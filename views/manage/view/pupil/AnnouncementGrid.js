Ext.define('manage.view.pupil.AnnouncementGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.pupilannouncementgrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.pupil.Announcement');
		Ext.apply(this, {
			store : store,
			tbar : [ {
				iconCls : 'query',
				xtype : 'button',
				action : 'query',
				text : '查询'
			}],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [ {
				text : '时间',
				dataIndex : 'time',
				hideable : false,
				flex : 1
			},  {
				text : '标题',
				dataIndex : 'head',
				hideable : false,
				flex : 1
			},{
				text : '查看',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '查看',
				action : 'view',
				width : 60,
				align : 'center',
				icon : 'resources/images/icons/view.png'
			}
			]
		});
		this.callParent(arguments);
	}
});