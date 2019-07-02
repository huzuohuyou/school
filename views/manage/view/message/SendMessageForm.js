Ext.define('manage.view.message.SendMessageForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.sendmessageform',
	requires : [ 'manage.view.ux.ComboBox','manage.store.ComboBox'],
	layout : {
		columns : 2,
		type : 'table'
	},
	bodyPadding : 10,
	header : false,
	buttonAlign : 'center',
	border : false,
	initComponent : function() {
		var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
		var me = this;
		Ext.applyIf(me, {
			items : [ {
				xtype : 'textfield',
				fieldLabel : '接收人',
				name : 'receiver_name',
				width : 400,
				readOnly : true
			},{
				xtype : 'textfield',
				fieldLabel : '发送时间',
				name : 'send_time',
				value : (new Date()).Format("yyyy-MM-dd HH:mm:ss"),
				width : 400,
				readOnly : true
			},{
				xtype : 'textfield',
				fieldLabel : '标题',
				name : 'title',
				colspan : 2,
				width : 800,
				afterLabelTextTpl : required,
				emptyText : '必须填写标题',
				blankText : '此项为必填项',
				allowBlank : false,
				maxLength : 500,
				maxLengthText : '最多输入500个字符'
			},{
				xtype : 'htmleditor',
				fieldLabel : '消息内容',
				name : 'content',
				colspan : 2,
				width : 800,
				height : 300,
				afterLabelTextTpl : required,
				emptyText : '必须填写标题',
				blankText : '此项为必填项',
				allowBlank : false
			},{
				xtype : 'textfield',
				fieldLabel : '接收人',
				name : 'receiver',
				hidden : true
			}],
			buttons : [ {
				text : '发送',
				handler : function() {
					var form = this.up('form').form;
					var action = 'insert'; 
					var funcId = 's90103';
					var successMsg = '发送成功';
					var failedMsg = '发送失败';
					var win = this.up('window');
					var grid = Ext.getCmp('sendMessageGrid');
					if(form.findField('content').getValue() == null || form.findField('content').getValue() == "") {
						Ext.Msg.alert('错误信息','内容不能为空！');
						return;
					}
					form.submit({
						waitMsg:'正在发送消息,请等待...',
						submitEmptyText : false,
						clientValidation : true,
						url : 'system.do',
						params : {
							action : action,
							funcId : funcId,
							sender : session.id,
							date : (new Date()).Format("yyyy-MM-dd") 
						},
						success : function(form, action) {
							top.Ext.Msg.alert('操作成功',
									action.result.msg == null ? successMsg
											: action.result.msg,function(){
												win.close();
												if(grid)
													grid.getStore().reload();
											});
						},
						failure : function(form, action) {
							switch (action.failureType) {
							case Ext.form.action.Action.CLIENT_INVALID:
								Ext.Msg.alert('操作失败', '所填数据不符合要求，请检查后提交');
								break;
							case Ext.form.action.Action.CONNECT_FAILURE:
								Ext.Msg.alert('操作失败', '提交失败，请检查网络');
								break;
							case Ext.form.action.Action.SERVER_INVALID:
								Ext.Msg.alert('操作失败', action.result.msg == null ? failedMsg
										: action.result.msg);
							}
						}
					});
				}
			}, {
				text : '关闭',
				handler : function() {
					this.up('window').close();
				}
			} ]
		});

		me.callParent(arguments);
	}

});