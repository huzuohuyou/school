Ext.define('manage.controller.Newactivity', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'newactivityGrid',
        selector: 'newactivitygrid'
    }],
    views: ['newactivity.WorkOrderForm'],
    init: function(app) {
        this.control({
			'newactivitygrid button[action=query]' : {
				click : this.query
			},
			'newactivitygrid button[action=insert]' : {
				click : this.add
			},
            'newactivitygrid button[action=delete]': {
                click: this.deleteItems
            },   
            'newactivitygrid button[action=view]': {
                click: this.view
            },
            'newactivitygrid actioncolumn[action=edit]': {
                click: this.edit
            },
            'newworkorderform button[action=salersave]': {
                click: this.save
            },
            'newworkorderform button[action=submit2plan]': {
                click: this.submit2plan   //销售人员第一次提交工单给策划人员
            },
            'newworkorderform button[action=submit2plan2]': {
                click: this.submit2plan2   //销售人员第二次提交工单给策划人员
            },
            'newworkorderform button[action=end]': {
                click: this.salerend   //销售人员终止工单
            },
            'newworkorderform button[action=salerstop]': {
                click: this.suspendorder   //销售人员暂停工单
            },
            'newworkorderform button[action=salergoon]': {
                click: this.goonorder   //销售人员继续工单
            },
        });
    },
    add: function(button) {
        if (session.authority.indexOf('b260102') > -1) 
        {
        	 var formWin = createWin('添加工单', 'newworkorderform');
        	 Ext.getCmp('salerend').setDisabled(true);
         	 Ext.getCmp('salerstop').setDisabled(true);
         	 Ext.getCmp('salergoon').setDisabled(true);
         	 Ext.getCmp('salerend2').setDisabled(true);
         	 Ext.getCmp('salerstop2').setDisabled(true);
         	 Ext.getCmp('salergoon2').setDisabled(true);
         	 //Ext.getCmp('salersave2').setDisabled(true);
         	 Ext.getCmp('change_describe').setDisabled(true);
        }
        else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    edit: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b260103') > -1) {
            var formWin = createWin('修改工单', 'newworkorderform');
            formWin.down('form').loadRecord(record);
            var status = record.data.status; 
            var pause = record.data.pause;
            formWin.down('form').form.findField('states').setValue(record.data.status); //工单当前状态控制 
            formWin.down('form').form.findField('pause').setValue(record.data.pause);   //是否暂停状态控制
            
            
            //确定了确认函的签名
            
            formWin.down('form').form.findField('ap_name3').setValue("执行主管"); //字段：确认函
            
            
            
            formWin.down('form').form.findField('ae_name2').setValue(record.data.ae_name);
            formWin.down('form').form.findField('name2').setValue(record.data.name);
            formWin.down('form').form.findField('saler_name2').setValue(record.data.saler_name);
            formWin.down('form').form.findField('studentAmount').setValue(record.data.student_amount);
            formWin.down('form').form.findField('startdate').setValue(record.data.pre_start_date);
            formWin.down('form').form.findField('enddate').setValue(record.data.pre_end_date);
            formWin.down('form').form.findField('changeBefore').setValue(record.data.change_describe);
			formWin.down('form').form.findField('xs_f_nameLink').setValue('<a target="_blank" href=system.do?action=downloadFile&f_id='+record.data.xs_f_id+'>'+record.data.xs_f_name+'</a>');
			formWin.down('form').form.findField('chfa_f_nameLink').setValue('<a target="_blank" href=system.do?action=downloadFile&f_id='+ record.data.chfa_f_id + '>' + record.data.chfa_f_name+ '</a>');
			formWin.down('form').form.findField('chhd_f_nameLink').setValue('<a target="_blank" href=system.do?action=downloadFile&f_id='+ record.data.chhd_f_id + '>' + record.data.chhd_f_name+ '</a>');
			formWin.down('form').form.findField('chjw_f_nameLink').setValue('<a target="_blank" href=system.do?action=downloadFile&f_id='+ record.data.chjw_f_id + '>' + record.data.chjw_f_name+ '</a>');
			formWin.down('form').form.findField('cdbg_f_nameLink').setValue('<a target="_blank" href=system.do?action=downloadFile&f_id='+record.data.cdbg_f_id+'>'+record.data.cdbg_f_name+'</a>');
			formWin.down('form').form.findField('yjya_f_nameLink').setValue('<a target="_blank" href=system.do?action=downloadFile&f_id='+ record.data.yjya_f_id + '>' + record.data.yjya_f_name+ '</a>');
			formWin.down('form').form.findField('hdxz_f_nameLink').setValue('<a target="_blank" href=system.do?action=downloadFile&f_id='+ record.data.hdxz_f_id + '>' + record.data.hdxz_f_name+ '</a>');
			formWin.down('form').form.findField('zxbz_f_nameLink').setValue('<a target="_blank" href=system.do?action=downloadFile&f_id='+ record.data.zxbz_f_id + '>' + record.data.zxbz_f_name+ '</a>');
			formWin.down('form').form.findField('fkjg_f_nameLink').setValue('<a target="_blank" href=system.do?action=downloadFile&f_id='+ record.data.fkjg_f_id + '>' + record.data.fkjg_f_name+ '</a>');
            if(status > 0){
              Ext.getCmp('submit2plan').setDisabled(true);
            }
            if(status > 2){
            	Ext.getCmp('submit2plan2').setDisabled(true);
            }
            if(status > 5){  //如果工单状态大于6，表示工单已经终止或者完结，或者废除，都不能进行该项操作
            	Ext.getCmp('salerend').setDisabled(true);
            	Ext.getCmp('salerstop').setDisabled(true);
            	Ext.getCmp('salergoon').setDisabled(true);
            	Ext.getCmp('salersave').setDisabled(true);
            	Ext.getCmp('salerend2').setDisabled(true);
            	Ext.getCmp('salerstop2').setDisabled(true);
            	Ext.getCmp('salergoon2').setDisabled(true);
            	Ext.getCmp('salersave2').setDisabled(true);
            }
            if(pause == 1){
            	Ext.getCmp('salergoon').setDisabled(true);
            	Ext.getCmp('salergoon2').setDisabled(true);
            }
            if(pause == 0){
            	Ext.getCmp('salerstop').setDisabled(true);
            	Ext.getCmp('salerstop2').setDisabled(true);
            }

        } else{
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    query: function(button) {
        if (session.authority.indexOf('b260101') > -1) {
            var grid = button.up('grid');
            var form = grid.up('panel').down('form');
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
    deleteItems: function(button) {
        if (session.authority.indexOf('b260104') > -1) {
            var grid = button.up('grid');
            var action = 'realDelete';
            var funcId = 'f260104';
            deleteItems(grid, action, funcId);
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    view: function(button) {
    	 window.location.href="activityCalinder.html";
     
    },
    save: function(button) {
        var form = button.up('form').form;
        var id = form.findField('id').getValue();
        if(id == ""){
        	var action = 'insertNewactivity_0';
        	var funcId = 'f260102';
        	var status = 0;
            var win = button.up('window');
            var grid = this.getNewactivityGrid();
            var freshfn = function() {
            	 win.close();
                 grid.getStore().reload();
             };
            var params = {
                 action: action,
                 funcId: funcId,
                 s_id: session.id
             };
            formSubmit(form, params, freshfn);
        }
        else{	
        	var action = 'updateNewactivity_0';
        	var funcId = 'f260103';
        	//获取存在表单中的几个字段，判断是否发生变化
        	var studentAmount = form.findField('studentAmount').getValue();
        	var startdate = form.findField('startdate').getValue();
        	var enddate = form.findField('enddate').getValue();
        	var changeBefore = form.findField('changeBefore').getValue();
        	//获取表单中现在这几个字段的值
        	var student_amount = form.findField('student_amount').getValue();
        	var pre_start_date = form.findField('pre_start_date').getValue();
        	var startdateConvert = Ext.Date.format(new Date(pre_start_date),'Y-m-d'); //时间格式转换，与数据库中的格式一致
        	var pre_end_date = form.findField('pre_end_date').getValue();
        	var enddateConvert = Ext.Date.format(new Date(pre_end_date),'Y-m-d');     //时间格式转换，与数据库中的格式一致
        	var change_describe = form.findField('change_describe').getValue();
        	if((studentAmount !=student_amount)&&(change_describe == changeBefore)){
	            Ext.Msg.alert('系统提示', '因修改了学生人数，必须填写修改说明！');
            }
            else if((startdate !=startdateConvert)&&(change_describe == changeBefore)){
            	 Ext.Msg.alert('系统提示', '因修改了开始时间，必须填写修改说明！');
            }
            else if((enddate !=enddateConvert)&&(change_describe == changeBefore)){
           	 Ext.Msg.alert('系统提示', '因修改了结束时间，必须填写修改说明！');
            }
        	else{
        	var win = button.up('window');
            var grid = this.getNewactivityGrid();
            var freshfn = function() {
            	win.close();
                grid.getStore().reload();
            };
            var params = {
                action: action,
                funcId: funcId,
                s_id: session.id
            };
            formSubmit(form, params, freshfn);
        	}
        }
    },
    submit2plan: function(button) {
        var form = button.up('form').form;
        var action;
        var funcId;
        var status = form.findField('status').getValue();
       
        if (form.findField('id').getValue() == "") {
            action = 'insertNewactivity_1';
            funcId = 'f260102';
        } 
        else {
            action = 'updateNewactivity_1';
            funcId = 'f260103';
        }
        var win = button.up('window');
        var grid = this.getNewactivityGrid();
        var freshfn = function() {
            win.close();
            grid.getStore().reload();
        };
        var params = {
            action: action,
            funcId: funcId,
            s_id: session.id,
            status:status
        };
        formSubmit(form, params, freshfn);
    },
    submit2plan2: function(button) {
        var form = button.up('form').form;
        var action = 'updateNewactivity_2';
        var funcId = 'f260103';
    //    var status = form.findField('status').getValue();
    //    alert(status);
        var f_id = form.findField('xs_f_id').getValue();
        if(f_id == "")
        {
        	Ext.Msg.alert('系统提示', '无法提交，请上传合同');
        }
        else{
        var win = button.up('window');
        var grid = this.getNewactivityGrid();
        var freshfn = function() {
            win.close();
            grid.getStore().reload();
        };
        var params = {
            action: action,
            funcId: funcId,
            s_id: session.id,
       //     status:status
        };
        formSubmit(form, params, freshfn);
        }
    },
    salerend: function(button) {   //销售人员终止工单	
        var grid = this.getNewactivityGrid();
        Ext.MessageBox.show({
			title : '提示信息',
			msg : '确定要终止工单吗？确定后将无法恢复。',
			icon : Ext.MessageBox.QUESTION,
			buttons : Ext.Msg.YESNO,
			fn : function(btnId, text, opt) {
				if (btnId == "yes") {
					Ext.Msg.wait('处理中，请稍后...', '提示');
                var form = button.up('form').form;
                var pause = form.findField('pause').getValue();
                var id = form.findField('id').getValue();
                var win = button.up('window');
                var store = grid.getStore();
                var refresh = function() {
                    win.close();
               grid.getStore().reload();
         };

         var params = {
            action:'salerendworkorder',
            funcId: 'f260403',
            s_id: session.id,
            id:id,
            pause:pause
        };
         ajax(null, params, null, refresh, store);
				}
			}
		});
        },
     suspendorder: function(button) {
        var grid = this.getNewactivityGrid();
        var form = button.up('form').form;
        var pause = form.findField('pause').getValue();
        var id = form.findField('id').getValue();
        var win = button.up('window');
        var store = grid.getStore();
        var refresh = function() {
               win.close();
               grid.getStore().reload();
           };
        Ext.Msg.wait('处理中，请稍后...', '提示');
        var params = {
                action:'saler_suspend_order',
                funcId: 'f260103',
                pause :pause,
                id :id
                };
        ajax(null, params, null, refresh, store);
        },
     goonorder: function(button) {
        var grid = this.getNewactivityGrid();
        var form = button.up('form').form;
        var pause = form.findField('pause').getValue();
        var id = form.findField('id').getValue();
        var win = button.up('window');
        var store = grid.getStore();
        var refresh = function() {
               win.close();
               grid.getStore().reload();
               };
        Ext.Msg.wait('处理中，请稍后...', '提示');
        var params = {
                action:'saler_goon_order',
                funcId: 'f260103',
                pause :pause,
                id :id
              };
            ajax(null, params, null, refresh, store);
            }
});