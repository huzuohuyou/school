Ext.define('manage.view.score.Menu', {
	extend : 'Ext.tree.Panel',
	alias : 'widget.exammenu',
	useArrows : true,
	rootVisible : false,
	multiSelect : false,
	singleExpand : false,
	initComponent : function() {
		var store = Ext.create('manage.store.score.Exam');
		Ext.apply(this, {
			store : store,
			title : '考试列表',
			region : 'west',
			width : 200,
			iconCls : 'icon00'
		});
		this.callParent(arguments);
	}
});
