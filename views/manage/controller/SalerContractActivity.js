Ext.define('manage.controller.SalerContractActivity', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'salercontractactivityGrid',
        selector: 'salercontractactivitygrid'
    },{
        ref: 'stepGrid',
        selector: 'stepgrid'
    }],
    views: ['salercontractactivity.Form','salercontractactivity.ViewForm','salercontractactivity.WorkOrderForm','salercontractactivity.StepForm'],
    init: function(app) {
        this.control({
            'salercontractactivitygrid button[action=insert]': {
                click: this.add
            },
			'salercontractactivitygrid button[action=query]' : {
				click : this.query
			},
            'salercontractactivitygrid actioncolumn[action=edit]': {
                click: this.edit
            },
            'salercontractactivitygrid button[action=delete]': {
                click: this.deleteItems
            },
            'activityform button[action=submit]': {
                click: this.submit
            },
            'salercontractactivitygrid actioncolumn[action=uploadFile]': {
                click: this.uploadFile
            },
            'salercontractactivitygrid actioncolumn[action=executeActivity]': {
                click: this.executeActivity
            },
            'salercontractactivitygrid actioncolumn[action=view]': {
                click: this.viewDetail
            },
            'salercontractactivitygrid actioncolumn[action=workOrder]': {
                click: this.workOrder
            },
            'salercontractactivitygrid actioncolumn[action=check]': {
                click: this.check
            },
            'salercontractactivitygrid actioncolumn[action=step]': {
                click: this.step
            },
            'contractworkorderform button[action=submit]': {
                click: this.wordordersubmit
            }
            
        });
    },
    step: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
    	  
    	var formWin = createWin('活动步骤', 'stepform');
    	var grid = formWin.down('grid');
    	formWin.down('form').form.findField('activityId').setValue(record.data.id);
    	var params = {
              
                activityId: record.data.id
                };
       
    	var store = grid.getStore();
        store.on("beforeload",
        function() {
            store.proxy.extraParams = params;
        });
        store.loadPage(1);

       
    },
    viewDetail : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b310105') > -1) {
			var formWin = createWin('查看备注', 'activityviewform');
			formWin.down('form').loadRecord(record);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
    update: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b310104') > -1) {
            if ((record.data.usable == '1' && actionItem == 2) || (record.data.usable == '0' && actionItem == 3)) return;
            var usable = actionItem == 2 ? '1': '0';
            var store = grid.getStore();
            var refresh = store.reload;
            Ext.Msg.wait('处理中，请稍后...', '提示');
            var params = {
                action: 'update',
                id: record.data.id,
                usable: usable,
                funcId: 'f310104'
            };
            ajax(null, params, null, refresh, store);
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }

    },
    add: function(button) {
        if (session.authority.indexOf('b310102') > -1) createWin('添加活动', 'activityform');
        else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    query: function(button) {
        if (session.authority.indexOf('b310401') > -1) {
            var grid = button.up('grid');
            var form = grid.up('panel').down('form');
            form.form.findField('userId').setValue(session.id);
            var params = form.getValues();

            var store = grid.getStore();
            store.on("beforeload",
            function() {
                store.proxy.extraParams = params;
 
            });
            store.loadPage(1);
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    edit: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b310103') > -1) {
            var formWin = createWin('修改活动', 'activityform');
            formWin.down('form').loadRecord(record);
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    deleteItems: function(button) {
        if (session.authority.indexOf('b310104') > -1) {
            var grid = button.up('grid');
            var action = 'realDelete';
            var funcId = 'f310104';
            deleteItems(grid, action, funcId);
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    workOrder: function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
       
    	if (session.authority.indexOf('b310101') > -1) {
			var formWin = createWin('活动工单', 'contractworkorderform');
	
			formWin.down('form').loadRecord(record);
			formWin.down('form').form.findField('w_activityId').setValue(record.data.id);
			formWin.down('form').form.findField('w_outOrNot').setValue(record.data.sex==1?'校内':'校外');
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
    },
    check: function(grid, rowIndex, colIndex, actionItem, event, record,row) {
       
    	if (session.authority.indexOf('b310108') > -1) {
    		if (record.data.status == 0 ||record.data.status == '0') {
    			if(record.data.workOrderId == null ||record.data.workOrderId == ''){
    				Ext.Msg.alert('系统提示', '请先提交活动工单再进行提交审核！');
    				return;
    			}
    			Ext.MessageBox.confirm('提示', '确定提交审核？', callBack); 
        		function callBack(id) { 
        			if(id=='yes'){
        				 var store = grid.getStore();
        		            var refresh = store.reload;
        		            Ext.Msg.wait('处理中，请稍后...', '提示');
        		            var params = {
        		                action: 'updateActivityStatus',
        		                id: record.data.id,
        		                actionName:"销售人员提交工单",
        		                type:"0",
        		                remark:"提交工单审核",
        		                status: 1,
        		                funcId: 'f310108'
        		            };
        		            ajax(null, params, null, refresh, store);
        			}
        		}
    		}else{
    			Ext.Msg.alert('系统提示', '当前状态无法提交审核!');
    		}
   		
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
    },
    executeActivity : function(grid, rowIndex, colIndex, actionItem, event, record,row) {
       
    	if (session.authority.indexOf('b310110') > -1) {
    		if (record.data.status == 5 ||record.data.status == '5') {
    			if(record.data.contractFile == null ||record.data.contractFile == ''
    				||record.data.f_id == null ||record.data.f_id == ''){
    				Ext.Msg.alert('系统提示', '请先上传合同！');
    				return;
    			}
    			Ext.MessageBox.confirm('提示', '确定提交执行？', callBack); 
        		function callBack(id) { 
        			if(id=='yes'){
        				 var store = grid.getStore();
        		            var refresh = store.reload;
        		            Ext.Msg.wait('处理中，请稍后...', '提示');
        		            var params = {
        		                action: 'updateActivityStatus',
        		                id: record.data.id,
        		                actionName:"销售人员提交合同",
        		                type:"0",
        		                remark:"销售人员提交合同",
        		                status: 6,
        		                funcId: 'f310110'
        		                	
        		            };
        		            ajax(null, params, null, refresh, store);
        			}
        		}
    		}else{
    			Ext.Msg.alert('系统提示', '当前状态无法提执行!');
    		}
   		
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
    },
    
    submit: function(button) {
        var form = button.up('form').form;
        var action;
        var funcId;
        if (form.findField('id').getValue() == "") {
            action = 'addActivity';
            funcId = 'f310102';
        } else {
            action = 'update';
            funcId = 'f310103';
        }
        var win = button.up('window');
        var grid = this.getActivityGrid();
        var freshfn = function() {
            win.close();
            grid.getStore().reload();
        };
        var params = {
            action: action,
            funcId: funcId,
            u_id: session.id,
            createUserId:session.id
        };
        formSubmit(form, params, freshfn);
    },
    wordordersubmit: function(button) {
        var form = button.up('form').form;
        var action;
        var funcId;
        if (form.findField('w_id').getValue() == "") {
            action = 'addWorkOrder';
            funcId = 'f310106';
        } else {
            action = 'update';
            funcId = 'f310107';
        }
        var win = button.up('window');
        var grid = this.getActivityGrid();
        var freshfn = function() {
            win.close();
            grid.getStore().reload();
        };
        var params = {
            action: action,
            funcId: funcId,
            u_id: session.id,
            w_activityId :form.findField('w_activityId').getValue(),
            createUserId:session.id
        };
        formSubmit(form, params, freshfn);
    },
    uploadFile: function(grid, rowIndex, colIndex, actionItem, event, record,row) {
   
		Ext.create('Ext.window.Window', {
						title : '活动合同',
						resizable : false,
						modal : true,
						layout : 'fit',
						items : [
							{xtype : 'form',
							layout : {
								columns : 2,
								type : 'table'
							},
							bodyPadding : 10,
							header : false,
							id : 'contractForm',
							buttonAlign : 'center',
							border : false,
							items : [ {
								xtype : 'displayfield',
								fieldLabel : '合同',
								name : 'f_name',
								value:'<a target="_blank" href=system.do?action=downloadFile&f_id='+record.data.f_id+'>'+record.data.contractFile+'</a>',
								colspan : 1,
								width : 500
							}, {
								xtype : 'hidden',
								name : 'f_id',
								value: record.data.f_id
							}, {
								xtype : 'hidden',
								name : 'contractFile',
								value: record.data.contractFile
								
							}, {
								xtype : 'hidden',
								name : 'id',
								value:record.data.id
							},{
								xtype : 'container',
								items : [
									{
										xtype : 'button',
										action : 'upload',
										handler : fileUpload,
										text : '浏览'
									}, {
										xtype : 'button',
										handler : function(button){
											button.up('form').form.findField('contractFile').setValue('');
											button.up('form').form.findField('f_id').setValue('');
											button.up('form').form.findField('f_name').setValue('');
										},
										text : '删除'
									}
								         ]
							}],
			buttons : [ {
				text : '确定',
				handler : function() {
					
					var win = this.up('window');
					var form = Ext.getCmp('contractForm').form;
					var action;
					var funcId;
//					if (form.findField('id').getValue() != "") {
//						
//						
//					}
					
					action = 'update';
					funcId = 'f310109';
					var freshfn = function() {
						win.close();
						grid.getStore().reload();
					};
					var params = {
						action : action,
						funcId : funcId,
					//	courses :courses,
					//	courses_name:courses_name
					//	test :test
					};
				
					formSubmit(form, params, freshfn);
					
					
				}
			}, {
				text : '关闭',
				handler : function() {
					this.up('window').close();
				}
			} ]}
						],
						autoShow : true
					});
		function fileUpload(button){
	 		var form = button.up('form');
			var old_file = form.getForm().findField('f_id').getValue();
			Ext.create('Ext.window.Window', {
				title : '上传文件',
				resizable : true,
				id : 'uploadFile',
				modal : true,
				layout : 'fit',
				items : [ {
					xtype : 'form',
					bodyPadding : 10,
					header : false,
					buttonAlign : 'center',
					border : false,
					items : [{
								xtype : 'filefield',
								name : 'new_file',
								fieldLabel : '文件路径(最大5M)',
								labelWidth : 80,
								msgTarget : 'side',
								allowBlank : false,
								anchor : '100%',
								afterLabelTextTpl : required,
								emptyText : '请选择上传文件',
								blankText : '此项为必填项',
								allowBlank : false,
								buttonText : '浏览'
							}, {
								xtype : 'textfield',
								hidden : true,
								name : 'old_file'
							}],
					buttons : [{
								text : '确定',
								handler : uploadFile
							}, {
								text : '关闭',
								handler : function() {
									this.up('window').close();
								}
							}]
				} ],
				autoShow : true
			});
			Ext.getCmp('uploadFile').down('form').getForm().findField('old_file').setValue(old_file);
		};
		function uploadFile(button) {
			var upLoadForm = button.up('form').getForm();
			var win = button.up('window');
			upLoadForm.submit({
				waitMsg : '正在上传数据,请等待...',
				clientValidation : true,
				url : 'system.do',
				params : {
					action : 'uploadFile'
				},
				success : function(form, action) {
					top.Ext.Msg.alert('上传成功', action.result.msg == null ? '上传成功'
							: action.result.msg, function() {
						var f_name = action.result.f_name;
						var f_id = action.result.f_id;
						var replyForm = Ext.getCmp('contractForm').form;
						replyForm.findField('f_name').setValue('<a target="_blank" href=system.do?action=downloadFile&f_id='+f_id+'>'+f_name+'</a>');
						replyForm.findField('f_id').setValue(f_id);
						replyForm.findField('contractFile').setValue(f_name);
						win.close();
					});
				},
				failure : function(form, action) {
					switch (action.failureType) {
					case Ext.form.action.Action.CLIENT_INVALID:
						top.Ext.Msg.alert('上传失败', '所填数据不符合要求，请检查后提交');
						break;
					case Ext.form.action.Action.CONNECT_FAILURE:
						top.Ext.Msg.alert('上传失败', '上传失败，请检查网络');
						break;
					case Ext.form.action.Action.SERVER_INVALID:
						top.Ext.Msg.alert('上传失败',
								action.result.msg == null ? '上传失败'
										: action.result.msg);
					}
				}
			});
		}
					
	}
	
});