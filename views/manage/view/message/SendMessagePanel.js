Ext.define('manage.view.message.SendMessagePanel', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.sendmessagepanel',
	layout : 'border',
	title : '消息发送',
	iconCls:'send_msg',
	id : 'sendmessagePanel',
	closable : true,
	initComponent : function() {
		this.callParent(arguments);
	},
	items : [ {
		xtype : 'sendmessagequeryform'
	} ,{
		xtype : 'sendmessagegrid'
	} ]
});