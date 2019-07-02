Ext.define('manage.view.schools.Menu', {
	extend : 'Ext.tree.Panel',
	alias : 'widget.areamenu',
	useArrows : true,
	rootVisible : false,
	multiSelect : false,
	singleExpand : false,
	initComponent : function() {
		var store = Ext.create('manage.store.schools.School_areatree');
		Ext.apply(this, {
			store : store,
			title : '学校分区',
			region : 'west',
			width : 200,
			collapsible : true,
			iconCls : 'icon00'
		});
		this.callParent(arguments);
	}
});
