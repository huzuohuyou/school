Ext.define('manage.view.TabPanel', {
	extend : 'Ext.tab.Panel',
	initComponent : function() {
		Ext.apply(this, {
			id : 'content-panel',
			region : 'center',
			defaults : {
				autoScroll : true,
				bodyPadding : 10
			},
			activeTab : 0,
			border : false,
			// plain: true,
			items : [ {
				id : 'HomePage',
				title : '个人首页',
				iconCls : 'home',
				autoLoad:{url:'person.do'},
				xtype : 'panel',
				layout : 'fit'
			} ]
		});
		this.callParent(arguments);
	}
});
