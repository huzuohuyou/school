Ext.define('manage.view.charger.ChargerSchoolGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.chargerschoolgrid',
	
	initComponent : function() {
		var store = Ext.create('manage.store.charger.ChargeSchool');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
			store : store,
			selModel : selModel,
			tbar : [{
				iconCls : 'item-add',
				xtype : 'button',
				hidden : session.authority.indexOf('b70103') > -1 ? false : true,
				action : 'addChargeSchool',
				text : '添加'
			}, '-', {
				iconCls : 'item-delete',
				xtype : 'button',
				hidden : session.authority.indexOf('b70103') > -1 ? false : true,
				action : 'deleteChargeSchool',
				text : '删除'
			}],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [  {
				text : '学校编号',
				dataIndex : 'number',
				flex : 1
			},{
				text : '学校名称',
				dataIndex : 'name',
				flex : 1.5
			},{
				text : '学校所在区',
				dataIndex : 'type',
				renderer : schoolAreaRender,
				flex : 1
			},{
				text : '学校地址',
				dataIndex : 'address',
				flex : 1
			},{
				text : '联系人',
				dataIndex : 'linkman',
				flex : 0.5
			},{
				text : '联系电话',
				dataIndex : 'telephone',
				flex : 1
			}
			]
		});
		this.callParent(arguments);
	}
});