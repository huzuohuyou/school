Ext.define('manage.controller.ChargeWorkOrderActivity', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'chargeworkorderactivityGrid',
        selector: 'chargeworkorderactivitygrid'
    },{
        ref: 'chargeworkorderactivitystepGrid',
        selector: 'chargeworkorderactivitystepgrid'
    }],
    views: ['chargeworkorderactivity.Form','chargeworkorderactivity.ViewForm','chargeworkorderactivity.WorkOrderForm','chargeworkorderactivity.StepForm','chargeworkorderactivity.AddPersonForm'],
    init: function(app) {
        this.control({
            'chargeworkorderactivitygrid button[action=insert]': {
                click: this.add
            },
			'chargeworkorderactivitygrid button[action=query]' : {
				click : this.query
			},
            'chargeworkorderactivitygrid actioncolumn[action=edit]': {
                click: this.edit
            },
            'chargeworkorderactivitygrid button[action=delete]': {
                click: this.deleteItems
            },
            'chargeworkorderactivitygrid button[action=submit]': {
                click: this.submit
            },
            'addpersonform button[action=submit]': {
                click: this.addPersonsubmit
            },
            'chargeworkorderactivitygrid actioncolumn[action=viewContract]': {
                click: this.viewContract
            },
            'chargeworkorderactivitygrid actioncolumn[action=planePass]': {
                click: this.planePass
            },
            'chargeworkorderactivitygrid actioncolumn[action=view]': {
                click: this.viewDetail
            },
            'chargeworkorderactivitygrid actioncolumn[action=workOrder]': {
                click: this.workOrder
            },
            'chargeworkorderactivitygrid actioncolumn[action=addPerson]': {
                click: this.addPerson
            },
            'chargeworkorderactivitygrid actioncolumn[action=workOrderPass]': {
                click: this.workOrderPass
            },
            'chargeworkorderactivitygrid actioncolumn[action=step]': {
                click: this.step
            },
            'chargeworkorderactivityworkorderform button[action=submit]': {
                click: this.wordordersubmit
            }
            
        });
    },
    step: function(grid, rowIndex, colIndex, actionItem, event, record, row) {

    	var formWin = createWin('活动步骤', 'chargeworkorderactivitystepform');
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
		if (session.authority.indexOf('b300105') > -1) {
			var formWin = createWin('查看备注', 'chargeworkorderactivityviewform');
			formWin.down('form').loadRecord(record);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
    add: function(button) {
        if (session.authority.indexOf('b300102') > -1) createWin('添加活动', 'chargeworkorderactivityform');
        else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    query: function(button) {
        if (session.authority.indexOf('b300201') > -1) {
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
        if (session.authority.indexOf('b300203') > -1) {
            var formWin = createWin('修改活动', 'chargeactivityform');
            formWin.down('form').loadRecord(record);
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    deleteItems: function(button) {
        if (session.authority.indexOf('b300104') > -1) {
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
       
    	if (session.authority.indexOf('b300101') > -1) {
			var formWin = createWin('活动工单', 'chargeworkorderactivityworkorderform');
	
			formWin.down('form').loadRecord(record);
			formWin.down('form').form.findField('w_activityId').setValue(record.data.id);
			formWin.down('form').form.findField('w_outOrNot').setValue(record.data.sex==1?'校内':'校外');
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
    },
    addPerson: function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
       
    	if (session.authority.indexOf('b300101') > -1) {
			var formWin = createWin('分配人员', 'addpersonform');
	
			formWin.down('form').loadRecord(record);
			formWin.down('form').form.findField('activity_id').setValue(record.data.id);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
    },
    addPersonsubmit: function(button) {
        var form = button.up('form').form;
        var action;
        var funcId;
        if (form.findField('id').getValue() == "") {
            action = 'addPerson';
            funcId = 'f300111';
        } else {
            action = 'update';
            funcId = 'f300112';
        }
        var win = button.up('window');
        var grid = this.getChargeworkorderactivityGrid();
        var freshfn = function() {
            win.close();
            grid.getStore().reload();
        };
        var params = {
            action: action,
            funcId: funcId,
        };
        formSubmit(form, params, freshfn);
    },
    workOrderPass: function(grid, rowIndex, colIndex, actionItem, event, record,row) {
    	
    		if (record.data.status == 1 ||record.data.status == '1') {
    			if(record.data.planUserId == null ||record.data.planUserId == ''
    				||record.data.actionUserId == null ||record.data.actionUserId == ''){
    				Ext.Msg.alert('系统提示', '请先分配策划人员和执行人员！');
    				return;
    			}
    			Ext.MessageBox.confirm('提示', '确定通过审核？', callBack); 
        		function callBack(id) { 
        			if(id=='yes'){
        				 var store = grid.getStore();
        		            var refresh = store.reload;
        		            Ext.Msg.wait('处理中，请稍后...', '提示');
        		            var params = {
        		               
        		                action: 'updateActivityStatus',
        		                id: record.data.id,
        		                actionName:"主管通过工单审核",
        		                type:"0",
        		                remark:"分配活动策划和执行人员，并通过工单审核",
        		                status: 2,
        		                funcId: 'f300108'
        		                	
        		            };
        		            ajax(null, params, null, refresh, store);
        			}
        		}
    		}else{
    			Ext.Msg.alert('系统提示', '当前状态无法提交审核!');
    		}
   		
		
    },
    planePass : function(grid, rowIndex, colIndex, actionItem, event, record,row) {
       
    	
    		if (record.data.status == 3 ||record.data.status == '3') {
    			
    			Ext.MessageBox.confirm('提示', '确定通过策划审核？', callBack); 
        		function callBack(id) { 
        			if(id=='yes'){
        				 var store = grid.getStore();
        		            var refresh = store.reload;
        		            Ext.Msg.wait('处理中，请稍后...', '提示');
        		            var params = {
        		            		action: 'updateActivityStatus',
            		                id: record.data.id,
            		                actionName:"主管通过策划方案",
            		                type:"0",
            		                remark:"主管通过策划方案",
            		                status: 5
        		            };
        		            ajax(null, params, null, refresh, store);
        			}
        		}
    		}else{
    			Ext.Msg.alert('系统提示', '当前状态无法提执行!');
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
    viewContract: function(grid, rowIndex, colIndex, actionItem, event, record,row) {
   
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
							}],
						buttons : [ {
								text : '关闭',
								handler : function() {
									this.up('window').close();
									}
								} ]
						}],
						autoShow : true
					});
		
					
	}
	
});