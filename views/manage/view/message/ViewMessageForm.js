Ext.define('manage.view.message.ViewMessageForm', {
	extend : 'Ext.form.Panel',
	requires : [ 'manage.view.message.SendMessageForm'],
	alias : 'widget.viewmessageform',
	layout : {
		columns : 2,
		type : 'table'
	},
	bodyPadding : 10,
	header : false,
	buttonAlign : 'center',
	border : false,
	initComponent : function() {
		var me = this;
		Ext.applyIf(me, {
			items : [ {
				xtype : 'displayfield',
				fieldLabel : '标题',
				name : 'title',
				colspan : 2,
				width : 800
			},{
				xtype : 'displayfield',
				fieldLabel : '消息内容',
				colspan : 2,
				width : 800
			},{
				xtype : 'panel',
				name : 'content',
				colspan : 2,
				bodyStyle : 'padding-left: 100px;',
				html : '',
				width : 800,
				height : 300,
				border : false,
				maxHeight : 300,
				autoScroll : true
			},{
				xtype : 'hidden',
				name : 'p_id'
			},{
				xtype : 'displayfield',
				fieldLabel : '发送人',
				name : 'sender_name',
				width : 400
			},{
				xtype : 'displayfield',
				fieldLabel : '接收人',
				name : 'receiver_name',
				width : 400
			},{
				xtype : 'displayfield',
				fieldLabel : '阅读状态',
				name : 'read_status',
				width : 400
			},{
				xtype : 'displayfield',
				fieldLabel : '发送时间',
				name : 'send_time',
				width : 400
			},{
				xtype : 'hidden',
				fieldLabel : '阅读时间',
				name : 'read_time',
				width : 400
			},{
				xtype : 'hidden',
				name : 'sender'
			},{
				xtype : 'hidden',
				name : 'receiver'
			},{
				xtype : 'hidden',
				name : 'id'
			}],
			buttons : [ {
				text : '回复',
				action : 'reply',
				handler : function() {
					var form = this.up('form').form;
					var sender = form.findField('sender').getValue();
					var sender_name = form.findField('sender_name').getValue();
					var title = form.findField('title').getValue();
					Ext.create('Ext.window.Window', {
						title : '回复消息',
						resizable : false,
						id : 'replyMessageForm',
						modal : true,
						layout : 'fit',
						items : [ {
							xtype : 'sendmessageform'
						} ],
						autoShow : true
					});
					var formWin = Ext.getCmp('replyMessageForm');
					formWin.down('form').form.findField('title').setValue("回复："+title);
					formWin.down('form').form.findField('receiver').setValue(sender);
					formWin.down('form').form.findField('receiver_name').setValue(sender_name);
					this.up('window').close();
				}
			}, {
				text : '关闭',
				handler : function() {
					this.up('window').close();
				}
			} ],
			listeners : {
				beforedestroy : function(o,eOpts){
					if(o.form.findField('receiver').getValue()==session.id && o.form.findField('read_status').getValue()=='未读') {
						var id = o.form.findField('id').getValue();
						Ext.Ajax.request({
							url : 'system.do', // 请求地址
							params : {
								action : 'update',
								id : id,
								read_status : '已读',
								read_time : (new Date()).Format("yyyy-MM-dd HH:mm:ss"),
								funcId : 's90102'
							}, // 请求参数
							method : 'post',
							callback : function(options, success, response) {
								if (success) {
									if(Ext.getCmp('receiveMessageGrid')){
										Ext.getCmp('receiveMessageGrid').getStore().reload();
									}
									if(Ext.getCmp('messagePortlet')){
										Ext.getCmp('messagePortlet').getStore().reload();
									}
								}
							}
						});
					}
				}
			}
		});

		me.callParent(arguments);
	}

});