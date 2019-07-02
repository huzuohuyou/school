Ext.define('manage.controller.ReceiveMessage', {
	extend : 'Ext.app.Controller',
	views : [ 'message.SendMessageForm', 'message.ReceiveMessageGrid','ux.ComboBox',
			'message.ReceiveMessagePanel', 'message.ReceiveMessageQueryForm','message.ViewMessageForm'],
	stores : [ 'message.Message','ComboBox'],
	models : [ 'message.Message'],
	openTab : function(app) {
		var tabPanel = app.getController('Menu').getTabPanel();
		var receivemessagePanel = tabPanel.child('receivemessagepanel');
		if (!receivemessagePanel) {
			var receivemessagePanel = Ext.widget('receivemessagepanel');
			receivemessagePanel.on("afterrender",function(){
				Ext.getBody().unmask();
			});
			tabPanel.add(receivemessagePanel);
			tabPanel.setActiveTab(receivemessagePanel);
		} else {
			Ext.getBody().unmask();
			tabPanel.setActiveTab(receivemessagePanel);
		}
	},
	init : function(app) {
		this.control({
			'receivemessagegrid button[action=query]' : {
				click : this.queryReceiveMessage
			},
			'receivemessagegrid button[action=delete]' : {
				click : this.deleteMessage
			},
			'receivemessageform button[action=submit]' : {
				click : this.submit
			},
			'receivemessagegrid actioncolumn[action=view]' : {
				click : this.viewMessage
			}
		});
	},
	viewMessage : function(grid, rowIndex, colIndex,
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
		formWin.down('form').form.findField('receiver_name').setVisible(false);
		formWin.down('panel[name=content]').body.update(record.data.content);
	},
	queryReceiveMessage : function(button) {
		var grid = Ext.getCmp('receiveMessageGrid');
		var form = grid.up('panel').down('form');
		var params = form.getValues();
		var store = grid.getStore();
		store.on("beforeload",function(){
	        store.proxy.extraParams=params;  
	    });  
		store.loadPage(1);
	},
	deleteMessage : function(button) {
		var grid = Ext.getCmp('receiveMessageGrid');
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
								receive_del : 0,
								funcId : 's10022'
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
