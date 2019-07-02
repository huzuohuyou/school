Ext.define('manage.controller.moudle.QueryMoudle', {
	extend : 'Ext.app.Controller',
	openTab : function(app, record) {
		var config = Ext.decode(record.data.config);
		app.getController(config.controller);
		Ext.require(config.requires, function() {
			var tabPanel = app.getController('Menu').getTabPanel();
			var childPanel = tabPanel.child('panel[id=' + record.get("id")
					+ ']');
			if (!childPanel) {
				var childPanel = Ext.create('manage.view.moudle.querymoudle.Panel', {
					id : record.data.id,
					title : record.data.text,
					iconCls : record.data.iconCls,
					items : [ Ext.create(config.queryForm),
							Ext.create(config.queryGrid) ]
				});
				childPanel.on("afterrender", function() {
					Ext.getBody().unmask();
				});
				tabPanel.add(childPanel);
				tabPanel.setActiveTab(childPanel);
			} else {
				Ext.getBody().unmask();
				tabPanel.setActiveTab(childPanel);
			}
		});
	}
});
