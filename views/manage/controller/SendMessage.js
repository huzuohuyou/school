Ext.define('manage.controller.SendMessage', {
	extend : 'Ext.app.Controller',
	views : [ 'message.SendMessageForm', 'message.SendMessageGrid','ux.ComboBox',
			'message.SendMessagePanel', 'message.SendMessageQueryForm','message.ViewMessageForm'],
	stores : [ 'message.Message','ComboBox'],
	models : [ 'message.Message'],
	init : function(app) {
		this.control({
			'sendmessagegrid button[action=insert]' : {
				click : this.addSendMessage
			},
			'sendmessagegrid button[action=query]' : {
				click : this.querySendMessage
			},
			'sendmessagegrid button[action=delete]' : {
				click : this.deleteMessage
			},
			'sendmessageform button[action=submit]' : {
				click : this.submit
			},
			'sendmessagegrid actioncolumn[action=view]' : {
				click : this.viewMessage
			}
		});
	},
	addSendMessage : function(button) {
		if (!Ext.getCmp('addSendMessageForm')) {
			Ext.create('Ext.window.Window', {
				title : '添加消息',
				resizable : false,
				id : 'addSendMessageForm',
				modal : true,
				layout : 'fit',
				items : [ {
					xtype : 'sendmessageform'
				} ],
				autoShow : true
			});
		} else {
			Ext.getCmp('addSendMessageForm').show();
		}
	},
	viewMessage : function(grid, rowIndex, colIndex,
			actionItem, event, record, row) {
			Ext.create('Ext.window.Window', {
				title : '消息详情',
				resizable : false,
				id : 'viewSendMessageForm',
				modal : true,
				layout : 'fit',
				items : [ {
					xtype : 'viewmessageform'
				} ],
				autoShow : true
			});
		var formWin = Ext.getCmp('viewSendMessageForm');
		formWin.down('form').loadRecord(record);
		formWin.down('form').form.findField('sender_name').setVisible(false);
		formWin.down('button[action=reply]').setVisible(false);
		formWin.down('panel[name=content]').body.update(record.data.content);
	},
	querySendMessage : function(button) {
		var grid = Ext.getCmp('sendMessageGrid');
		var form = grid.up('panel').down('form');
		var params = form.getValues();
		var store = grid.getStore();
		store.on("beforeload",function(){
	        store.proxy.extraParams=params;  
	    });  
		store.loadPage(1);
	},
	deleteMessage : function(button) {
		var grid = Ext.getCmp('sendMessageGrid');
		var store = grid.getStore();
		var refresh = store.reload;
		var records = grid.getSelectionModel().getSelection();
		if (records.length == 0) {
			Ext.MessageBox.show({
				title : '提示信息',
				msg : '请先选择要删除的消息!',
				icon : Ext.MessageBox.WARNING,
				buttons : Ext.Msg.OK
			});
			return;
		} else {
			var ids = "";
			for ( var i = 0; i < records.length; i++) {
				ids += records[i].get("id");
				if (i < records.length - 1)
					ids += ',';
			}
			Ext.MessageBox.show({
				title : '提示信息',
				msg : '确定删除吗？',
				icon : Ext.MessageBox.QUESTION,
				buttons : Ext.Msg.YESNO,
				fn : function(btnId, text, opt) {
					if (btnId == "yes") {
						Ext.Msg.wait('处理中，请稍后...', '提示');
						Ext.Ajax.request({
							url : 'system.do', // 请求地址
							params : {
								action : 'batchUpdate',
								ids : ids,
								send_del : 0,
								funcId : 's10021'
							}, // 请求参数
							method : 'post', // 方法
							callback : function(options, success, response) {
								if (success) {
									Ext.Msg.hide();
									Ext.MessageBox.show({
										title : '提示信息',
										msg : '删除成功!',
										icon : Ext.MessageBox.INFO,
										buttons : Ext.Msg.OK,
										fn : refresh,
										scope : store 
									});
								} else {
									 Ext.Msg.hide();
									Ext.MessageBox.show({
										title : '提示信息',
										msg : '删除失败!',
										icon : Ext.MessageBox.ERROR,
										buttons : Ext.Msg.OK
									});
								}
							}
						});
					}
				}
			});
		}
	}
});
