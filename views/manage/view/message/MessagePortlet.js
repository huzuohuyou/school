Ext.define('manage.view.message.MessagePortlet', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.messageportlet',
	id : 'messagePortlet',
	requires : [ 'manage.store.message.Message',
			'manage.view.message.ViewMessageForm' ],
	beforeLayout : function() {
		this.setHeight((Ext.getCmp('HomePage').getHeight() - 140) / 2);
	},
	initComponent : function() {

		var store = Ext.create('manage.store.message.Message', {
			proxy : {
				type : 'ajax',
				url : 'manage.do?action=getMessageList&receive_del=1&receiver='
						+ session.id,

				reader : {
					type : 'json',
					root : 'data',
					totalProperty : 'totalCount',
					successProperty : 'success'
				}
			},
			autoLoad : {
				limist : -1,
				start : 0
			}
		});

		Ext.apply(this, {
			store : store,
			autoScroll : true,
			stripeRows : true,
			columnLines : true,
			columns : [
					{
						text : '发送人',
						flex : 1,
						sortable : false,
						dataIndex : 'sender_name'
					},
					{
						text : '标题',
						flex : 2,
						sortable : false,
						dataIndex : 'title'
					},
					{
						xtype : 'actioncolumn',
						text : '查看',
						hideable : false,
						menuDisabled : true,
						align : 'center',
						icon : 'resources/images/view.png',
						width : 60,
						handler : function(grid, rowIndex, colIndex,
								actionItem, event, record, row) {
							Ext.create('Ext.window.Window', {
								title : '消息详情',
								resizable : false,
								id : 'viewReceiveMessageForm',
								modal : true,
								layout : 'fit',
								items : [ {
									xtype : 'viewmessageform'
								} ],
								autoShow : true
							});
							var formWin = Ext.getCmp('viewReceiveMessageForm');
							formWin.down('form').loadRecord(record);
							formWin.down('form').form
									.findField('receiver_name').setVisible(
											false);
							formWin.down('panel[name=content]').body.update(record.data.content);
						}
					} ]
		});

		this.callParent(arguments);
	}
});
