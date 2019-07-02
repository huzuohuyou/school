Ext.define('manage.controller.ExecuteStartedActivity', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'executestartedactivityGrid',
        selector: 'executestartedactivitygrid'
    },{
        ref: 'executestartedactivitystepGrid',
        selector: 'executestartedactivitystepgrid'
    }],
    views: ['executestartedactivity.Form','executestartedactivity.ViewForm','executestartedactivity.WorkOrderForm',
    	'executestartedactivity.StepForm'],
    init: function(app) {
        this.control({
            'executestartedactivitygrid button[action=insert]': {
                click: this.add
            },
			'executestartedactivitygrid button[action=query]' : {
				click : this.query
			},
            'executestartedactivitygrid actioncolumn[action=edit]': {
                click: this.edit
            },
            'executestartedactivitygrid button[action=delete]': {
                click: this.deleteItems
            },
            'executestartedactivitygrid button[action=submit]': {
                click: this.submit
            },
            'executestartedactivitygrid actioncolumn[action=viewContract]': {
                click: this.viewContract
            },
            'executestartedactivitygrid actioncolumn[action=start]': {
                click: this.start
            },
            'executestartedactivitygrid actioncolumn[action=step]': {
                click: this.step
            },
            'executestartedactivitygrid actioncolumn[action=end]': {
                click: this.end
            },
            'executestartedactivitygrid actioncolumn[action=confirm]': {
                click: this.confirm
            },
            'executestartedactivitygrid actioncolumn[action=view]': {
                click: this.viewDetail
            },
            'executestartedactivitygrid actioncolumn[action=workOrder]': {
                click: this.workOrder
            },
            'executestartedactivitygrid actioncolumn[action=workOrderPass]': {
                click: this.workOrderPass
            },
            'executestartedactivitystepgrid actioncolumn[action=activityStepExecute]': {
                click: this.activityStepExecute
            },
            'executestartedactivityworkorderform button[action=submit]': {
                click: this.wordordersubmit
            }
            
        });
    },
    viewDetail : function(grid, rowIndex, colIndex, actionItem, event, record,row) {

		var formWin = createWin('查看活动', 'executestartedactivityviewform');
		formWin.down('form').loadRecord(record);
		
	},
    add: function(button) {
        if (session.authority.indexOf('b300102') > -1) createWin('添加活动', 'executestartedactivityform');
        else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    query: function(button) {
        if (session.authority.indexOf('b330101') > -1) {
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
        if (session.authority.indexOf('b300103') > -1) {
            var formWin = createWin('修改活动', 'executestartedactivityform');
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
       
    	
		var formWin = createWin('活动工单', 'executestartedactivityworkorderform');

		formWin.down('form').loadRecord(record);
		formWin.down('form').form.findField('w_activityId').setValue(record.data.id);
		formWin.down('form').form.findField('w_outOrNot').setValue(record.data.sex==1?'校内':'校外');
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
    activityStepExecute:function(grid, rowIndex, colIndex, actionItem, event, record,row) {
    	if(record.data.recordStatus == 1){
    		return;
    	}
    	var form = grid.up('panel').up('form');
    
        var activityId = form.form.findField('activityId').getValue();
    	
		Ext.MessageBox.confirm('提示', '确定执行任务？', callBack); 
		function callBack(id) { 
			if(id=='yes'){
				 var store = grid.getStore();
		            var refresh = store.reload;
		            Ext.Msg.wait('处理中，请稍后...', '提示');
		            var params = {
		            		action: 'activityStepExecute',
    		                stepId: record.data.id,
    		                activityId:activityId
    		          
    		            
		            };
		            ajax(null, params, null, refresh, store);
			}
		}
	
   		
		
    },
    confirm : function(grid, rowIndex, colIndex, actionItem, event, record,row) {
       
		if (record.data.status == 6 ||record.data.status == '6') {
			
			Ext.MessageBox.confirm('提示', '确定接受任务？', callBack); 
    		function callBack(id) { 
    			if(id=='yes'){
    				 var store = grid.getStore();
    		            var refresh = store.reload;
    		            Ext.Msg.wait('处理中，请稍后...', '提示');
    		            var params = {
    		            		action: 'updateActivityStatus',
        		                id: record.data.id,
        		                actionName:"执行人员确认",
        		                type:"0",
        		                remark:"执行人员确认",
        		                status: 7
    		            };
    		            ajax(null, params, null, refresh, store);
    			}
    		}
		}else{
			Ext.Msg.alert('系统提示', '当前状态无法提执行!');
		}
   		
		
    },
    start : function(grid, rowIndex, colIndex, actionItem, event, record,row) {
        
		if (record.data.status == 7 ||record.data.status == '7') {
			
			Ext.MessageBox.confirm('提示', '确定开始执行？', callBack); 
    		function callBack(id) { 
    			if(id=='yes'){
    				 var store = grid.getStore();
    		            var refresh = store.reload;
    		            Ext.Msg.wait('处理中，请稍后...', '提示');
    		            var params = {
    		            		action: 'updateActivityStatus',
        		                id: record.data.id,
        		                actionName:"开始执行",
        		                type:"0",
        		                remark:"开始执行",
        		                status: 8
    		            };
    		            ajax(null, params, null, refresh, store);
    			}
    		}
		}else{
			Ext.Msg.alert('系统提示', '当前状态无法提执行!');
		}
		
	
    },
    step: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
    	var formWin = createWin('活动步骤', 'executestartedactivitystepform');
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
    end : function(grid, rowIndex, colIndex, actionItem, event, record,row) {
        
		if (record.data.status == 8 ||record.data.status == '8') {
			
			Ext.MessageBox.confirm('提示', '确定结束活动？', callBack); 
    		function callBack(id) { 
    			if(id=='yes'){
    				 var store = grid.getStore();
    		            var refresh = store.reload;
    		            Ext.Msg.wait('处理中，请稍后...', '提示');
    		            var params = {
    		            		action: 'updateActivityStatus',
        		                id: record.data.id,
        		                actionName:"活动结束",
        		                type:"0",
        		                remark:"活动结束",
        		                status: 9
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
        var grid = this.getExecutestartedactivityGrid();
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
            return;
        } else {
            action = 'update';
            funcId = 'f330102';
        }
        var win = button.up('window');
        var grid = this.getExecutestartedactivityGrid();
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