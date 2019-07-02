Ext.define('manage.view.message.ReceiveMessagePanel', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.receivemessagepanel',
	layout : 'border',
	title : '消息接收',
	iconCls:'receive_msg',
	id : 'receivemessagePanel',
	closable : true,
	initComponent : function() {
		this.callParent(arguments);
	},
	items : [ {
		xtype : 'receivemessagequeryform'
	} ,{
		xtype : 'receivemessagegrid'
	} ]
});