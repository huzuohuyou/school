Ext.define('manage.controller.moudle.GridMoudle', {
	extend : 'Ext.app.Controller',
	openTab : function(app, record) {
		var config = Ext.decode(record.data.config);
		app.getController(config.controller);
		Ext.require(config.requires, function() {
			var tabPanel = app.getController('Menu').getTabPanel();
			var childPanel = tabPanel.child('panel[id=' + record.get("id")
					+ ']');
			if (!childPanel) {
				var childPanel = Ext.create('Ext.panel.Panel', {
					closable : true,
					layout : 'border',
					id : record.data.id,
					title : record.data.text,
					iconCls : record.data.iconCls,
					items : [Ext.create(config.grid)]
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
