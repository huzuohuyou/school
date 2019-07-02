Ext.define('manage.view.mysign.Grid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.mysigngrid',
	
	initComponent : function() {
		
		var store = Ext.create('manage.store.mysign.Mysign');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		var combo = new Ext.form.ComboBox({
			store : Ext.create('manage.store.ComboBox',{
				data : studentstateData
			}),
            queryMode : 'local'
		});
		
		Ext.apply(this, {
		
			store : store,
			selModel : selModel,
			tbar : [{
				iconCls : 'query',
				xtype : 'button',
				hidden : session.authority.indexOf('b80601') > -1 ? false : true,
				action : 'query',
				text : '查询'
			}, '-',{
				iconCls : 'item-delete',
				xtype : 'button',
				hidden : session.authority.indexOf('b80604') > -1 ? false : true,
				action : 'delete',
				text : '删除'
			}
			],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [  {
				text : '学号',
				dataIndex : 'number',
				flex : 1
			},
			{
				text : '班级名称',
				dataIndex : 'c_name',
				flex : 1
			},
            {
				text : '记录时间',
				dataIndex : 'typetime',
				flex : 1
			},{
				text : '状态',
				dataIndex : 'states',
				renderer : studentstateRender,
				flex : 1,
			}
			]
		});
		this.callParent(arguments);
	}
});