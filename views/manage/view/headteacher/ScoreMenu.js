Ext.define('manage.view.headteacher.ScoreMenu', {
	extend : 'Ext.tree.Panel',
	alias : 'widget.headteacherexammenu',
	useArrows : true,
	rootVisible : false,
	multiSelect : false,
	singleExpand : false,
	initComponent : function() {
		var store = Ext.create('manage.store.headteacher.Exam');
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
