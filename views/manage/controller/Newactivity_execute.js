Ext.define('manage.controller.Newactivity_execute', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'newactivity_executeGrid',
        selector: 'newactivity_executegrid'
    }],
    views: ['newactivity_execute.WorkOrderForm'],
    init: function(app) {
        this.control({
			'newactivity_executegrid button[action=query]' : {
				click : this.query
			},
            'newactivity_executegrid actioncolumn[action=edit]': {
                click: this.edit
            },
            'executenewworkorderform button[action=saveExecute]': {
                click: this.save
            },
            'executenewworkorderform button[action=startexecute]': {
                click: this.startexecute
            },
            'executenewworkorderform button[action=endexecute]': {
                click: this.endexecute
            },
            'executenewworkorderform button[action=abolishexecute]': {
                click: this.abolishexecute
            },
        });
    },
    edit: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b260403') > -1) {
            var formWin = createWin('修改工单', 'executenewworkorderform');
            formWin.down('form').loadRecord(record);
            formWin.down('form').form.findField('states').setValue(record.data.status); //工单当前状态控制 
            formWin.down('form').form.findField('ae_name2').setValue(record.data.ae_name);
            formWin.down('form').form.findField('ap_name2').setValue(record.data.ap_name);
            formWin.down('form').form.findField('ap_name3').setValue(record.data.ap_name);
            formWin.down('form').form.findField('saler_name2').setValue(record.data.saler_name);
            formWin.down('form').form.findField('name2').setValue(record.data.name);
            
            
			
	        //formWin.down('form').form.findField('xs_f_nameLink').setValue('<a target="_blank" href=system.do?action=downloadFile&f_id='+record.data.xs_f_id+'>'+record.data.xs_f_name+'</a>');
			
            
            //更改了销售合同出现链接的情况
            
			formWin.down('form').form.findField('xs_f_nameLink').setValue(record.data.xs_f_name);
			
			formWin.down('form').form.findField('chfa_f_nameLink').setValue('<a target="_blank" href=system.do?action=downloadFile&f_id='+ record.data.chfa_f_id + '>' + record.data.chfa_f_name+ '</a>');
			formWin.down('form').form.findField('chhd_f_nameLink').setValue('<a target="_blank" href=system.do?action=downloadFile&f_id='+ record.data.chhd_f_id + '>' + record.data.chhd_f_name+ '</a>');
			formWin.down('form').form.findField('chjw_f_nameLink').setValue('<a target="_blank" href=system.do?action=downloadFile&f_id='+ record.data.chjw_f_id + '>' + record.data.chjw_f_name+ '</a>');
			formWin.down('form').form.findField('cdbg_f_nameLink').setValue('<a target="_blank" href=system.do?action=downloadFile&f_id='+record.data.cdbg_f_id+'>'+record.data.cdbg_f_name+'</a>');
			formWin.down('form').form.findField('yjya_f_nameLink').setValue('<a target="_blank" href=system.do?action=downloadFile&f_id='+ record.data.yjya_f_id + '>' + record.data.yjya_f_name+ '</a>');
			formWin.down('form').form.findField('hdxz_f_nameLink').setValue('<a target="_blank" href=system.do?action=downloadFile&f_id='+ record.data.hdxz_f_id + '>' + record.data.hdxz_f_name+ '</a>');
			formWin.down('form').form.findField('zxbz_f_nameLink').setValue('<a target="_blank" href=system.do?action=downloadFile&f_id='+ record.data.zxbz_f_id + '>' + record.data.zxbz_f_name+ '</a>');
			formWin.down('form').form.findField('fkjg_f_nameLink').setValue('<a target="_blank" href=system.do?action=downloadFile&f_id='+ record.data.fkjg_f_id + '>' + record.data.fkjg_f_name+ '</a>');
			var status = record.data.status;
	        if(status > 5){
	            Ext.getCmp('startexecute').setDisabled(true);
	          }
	        if(status > 6)
	        	{
	        	Ext.getCmp('endexecute').setDisabled(true);
	        	Ext.getCmp('abolishexecute').setDisabled(true);
	        	Ext.getCmp('saveExecute').setDisabled(true);
	        	}
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    query: function(button) {
        if (session.authority.indexOf('b260401') > -1) {
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
    save: function(button) {
        var form = button.up('form').form;
        var action = 'updateNewactivity_execute';
        var funcId = 'f260403';
        var status;
        var win = button.up('window');
        var grid = this.getNewactivity_executeGrid();
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
    },
    startexecute: function(button) {
        var form = button.up('form').form;
        var action = 'startNewactivity_execute';
        var funcId = 'f260403';
        var status = form.findField('status').getValue(); 
    
        var f_id = form.findField('cdbg_f_id').getValue();
        var f_id1 = form.findField('yjya_f_id').getValue();
        var f_id2= form.findField('hdxz_f_id').getValue();
        var f_id3 = form.findField('zxbz_f_id').getValue();
        if(f_id == "" ||f_id1 == "" ||f_id2 == "" || f_id3 =="")
        {
        	 Ext.Msg.alert('系统提示', '无法开始执行，请先上传文件');
        }
        else{
        var win = button.up('window');
        var grid = this.getNewactivity_executeGrid();
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
      }
    },
    endexecute: function(button) {
        var form = button.up('form').form;
        var action = 'endNewactivity_execute';
        var funcId = 'f260403';
        var status = form.findField('status').getValue(); 
        var f_id = form.findField('fkjg_f_id').getValue();
        if(f_id == "")
        {
        	 Ext.Msg.alert('系统提示', '无法完结工单，请先上传反馈结果');
        }
        else{
        var win = button.up('window');
        var grid = this.getNewactivity_executeGrid();
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
      }
    },
    abolishexecute: function(button) {
    	 var grid = this.getNewactivity_executeGrid();
    	 Ext.MessageBox.show({
				title : '提示信息',
				msg : '确定要废除工单吗？确定后将无法恢复。',
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
             action:'abolishNewactivity_execute',
             funcId: 'f260403',
             pause :pause,
             id :id
            };
             ajax(null, params, null, refresh, store);
					}
				}
			});
    }
});