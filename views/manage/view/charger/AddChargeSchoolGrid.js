Ext.define('manage.view.charger.AddChargeSchoolGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.addchargeschoolgrid',
	initComponent : function() {
		var store = Ext.create('manage.store.charger.ChargeNoSchool');
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
			columns : [{
				text : '学校名称',
				dataIndex : 'name',
				flex : 1.5
			},{
				text : '学校所在区',
				dataIndex : 'type',
				renderer : schoolAreaRender,
				flex : 1
			}
			]
		});
		this.callParent(arguments);
	}
});