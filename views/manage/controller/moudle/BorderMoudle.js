Ext.define('manage.controller.moudle.BorderMoudle', {
	extend : 'Ext.app.Controller',
	openTab : function(app, record) {
		var config = Ext.decode(record.data.config);
		app.getController(config.controller);
		Ext.require(config.requires, function() {
			var tabPanel = app.getController('Menu').getTabPanel();
			var childPanel = tabPanel.child('panel[id=' + record.get("id")
					+ ']');
			if (!childPanel) {
				var items = [];
				for(var i=0;i<config.items.length;i++){
					items.push(Ext.create(config.items[i]));
				}
				var childPanel = Ext.create('Ext.panel.Panel', {
					id : record.data.id,
					title : record.data.text,
					iconCls : record.data.iconCls,
					items : items,
					layout : 'border',
					closable : true
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
