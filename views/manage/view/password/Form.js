Ext.define('manage.view.password.Form', {
    extend: 'manage.view.moudle.Form',
    alias: 'widget.passwordform',
    region : 'center',
    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },
	initComponent : function() {
		var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
		var me = this;
		Ext.applyIf(me, {
			items:[   
			           { 
			        	xtype:'textfield',
			            fieldLabel:'输入原密码',  
			            name:'passwordbefore',  
			            inputType:'password',
			            afterLabelTextTpl : required,
			            blankText:'密码不能为空',   
			           },{ 
			        	xtype:'textfield',
			            fieldLabel:'输入新密码',  
			            name:'password',  
			            inputType:'password',
			            afterLabelTextTpl : required,
			            blankText:'密码不能为空',   
			           },{  
			            xtype:'textfield',
			            fieldLabel:'再次输入密码',  
			            name:'secondPassword',  
			            inputType:'password',
			            afterLabelTextTpl : required,
			            blankText:'密码不能为空',  
			           }     
			       ],
			       buttons : [ {
						text : '发送',
						handler : function() {
							var form = this.up('form').form;
							var action = 'updatePassword';
							var password = form.findField('password').getValue();
							var successMsg = '修改成功';
							var failedMsg = '修改失败';
							var win = this.up('window');
							form.submit({
								waitMsg:'正在发送消息,请等待...',
								submitEmptyText : false,
								clientValidation : true,
								url : 'system.do',
								params : {
									action : action,
									id:session.id
								},
								
								success : function(form, action) {
									top.Ext.Msg.alert('操作成功',
											 successMsg
													);
									form.findField('password').setValue("");
									form.findField('passwordbefore').setValue("");
									form.findField('secondPassword').setValue("");
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
										if(action.result.msg=="111")
										Ext.Msg.alert('操作失败',"原密码输入错误");
										else if(action.result.msg=="222")
											Ext.Msg.alert('操作失败',"密码输入不能为空");
										else if(action.result.msg=="333")
											Ext.Msg.alert('操作失败',"密码不等低于6位");
										else if(action.result.msg=="444")
											Ext.Msg.alert('操作失败',"两次输入密码不一致");
									}
								}
							});
						}
					} ]
		});

		me.callParent(arguments);
	}
});