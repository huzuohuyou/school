Ext.define('manage.controller.Newactivity_plan', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'newactivity_planGrid',
		selector : 'newactivity_plangrid'
	} ],
	views : [ 'newactivity_plan.WorkOrderForm' ],
	init : function(app) {
		this.control({
			'newactivity_plangrid button[action=query]' : {
				click : this.query
			},
			/*
			 * 'newactivity_plangrid button[action=insert]' : { click : this.add },
			 * 'newactivity_plangrid button[action=delete]': { click:
			 * this.deleteItems }, 'newactivity_plangrid
			 * actioncolumn[action=edit]': { click: this.edit },
			 */
			'newactivity_plangrid actioncolumn[action=wedit]' : {
				click : this.wedit
			},
			'plannewworkorderform button[action=submit2saler]' : {
				click : this.submit2saler
			},
			'plannewworkorderform button[action=submit2charger]' : {
				click : this.submit2charger
			},
		/*
		 * 'plannewworkorderform button[action=submit]': { click: this.submit }
		 */
		});
	},
	/*
	 * viewDetail : function(grid, rowIndex, colIndex, actionItem, event,
	 * record, row) { if (session.authority.indexOf('b210305') > -1) { var
	 * formWin = createWin('查看备注', 'activitydeletedviewform');
	 * formWin.down('form').loadRecord(record); } else { Ext.Msg.alert('系统提示',
	 * '您无权进行此项操作'); } },
	 */
	/*
	 * add: function(button) { if (session.authority.indexOf('b260202') > -1)
	 * createWin('添加活动工单', 'newworkorderform_plan'); else {
	 * Ext.Msg.alert('系统提示', '您无权进行此项操作'); } }, edit: function(grid, rowIndex,
	 * colIndex, actionItem, event, record, row) { if
	 * (session.authority.indexOf('b260203') > -1) { var formWin =
	 * createWin('修改工单', 'newworkorderform');
	 * formWin.down('form').loadRecord(record); } else { Ext.Msg.alert('系统提示',
	 * '您无权进行此项操作'); } },
	 */
	wedit : function(grid, rowIndex, colIndex, actionItem, event, record, row) {
		if (session.authority.indexOf('b260203') > -1) {
			var formWin = createWin('编辑活动工单', 'plannewworkorderform');
			formWin.down('form').loadRecord(record);
			var status = record.data.status;
			formWin.down('form').form.findField('states').setValue(record.data.status);
			formWin.down('form').form.findField('ae_name2').setValue(record.data.ae_name);
			formWin.down('form').form.findField('ap_name2').setValue(record.data.ap_name);
			formWin.down('form').form.findField('ap_name3').setValue(record.data.ap_name);
			formWin.down('form').form.findField('saler_name2').setValue(record.data.saler_name);
	        formWin.down('form').form.findField('name2').setValue(record.data.name);
		    // formWin.down('form').form.findField('xs_f_nameLink').setValue('<a target="_blank" href=system.do?action=downloadFile&f_id='+record.data.xs_f_id+'>'+record.data.xs_f_name+'</a>');
	        
	        //更改了执行端销售上传文件出现链接性的情况
	        
	        formWin.down('form').form.findField('xs_f_nameLink').setValue(record.data.xs_f_name);
	        
			formWin.down('form').form.findField('chfa_f_nameLink').setValue('<a target="_blank" href=system.do?action=downloadFile&f_id='+ record.data.chfa_f_id + '>' + record.data.chfa_f_name+ '</a>');
			formWin.down('form').form.findField('chhd_f_nameLink').setValue('<a target="_blank" href=system.do?action=downloadFile&f_id='+ record.data.chhd_f_id + '>' + record.data.chhd_f_name+ '</a>');
			formWin.down('form').form.findField('chjw_f_nameLink').setValue('<a target="_blank" href=system.do?action=downloadFile&f_id='+ record.data.chjw_f_id + '>' + record.data.chjw_f_name+ '</a>');
			formWin.down('form').form.findField('cdbg_f_nameLink').setValue('<a target="_blank" href=system.do?action=downloadFile&f_id='+record.data.cdbg_f_id+'>'+record.data.cdbg_f_name+'</a>');
			formWin.down('form').form.findField('yjya_f_nameLink').setValue('<a target="_blank" href=system.do?action=downloadFile&f_id='+ record.data.yjya_f_id + '>' + record.data.yjya_f_name+ '</a>');
			formWin.down('form').form.findField('hdxz_f_nameLink').setValue('<a target="_blank" href=system.do?action=downloadFile&f_id='+ record.data.hdxz_f_id + '>' + record.data.hdxz_f_name+ '</a>');
			formWin.down('form').form.findField('zxbz_f_nameLink').setValue('<a target="_blank" href=system.do?action=downloadFile&f_id='+ record.data.zxbz_f_id + '>' + record.data.zxbz_f_name+ '</a>');
			formWin.down('form').form.findField('fkjg_f_nameLink').setValue('<a target="_blank" href=system.do?action=downloadFile&f_id='+ record.data.fkjg_f_id + '>' + record.data.fkjg_f_name+ '</a>');
			if(status > 3){
	              Ext.getCmp('submit2charger').setDisabled(true);
	            }
			if(status > 4){
	              Ext.getCmp('sumbit2saler').setDisabled(true);
	            }
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	query : function(button) {
		if (session.authority.indexOf('b260201') > -1) {
			var grid = button.up('grid');
			var form = grid.up('panel').down('form');
			var params = form.getValues();
			var store = grid.getStore();
			store.on("beforeload", function() {
				store.proxy.extraParams = params;
			});
			store.loadPage(1);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	/*
	 * deleteItems: function(button) { if (session.authority.indexOf('b260204') >
	 * -1) { var grid = button.up('grid'); var action = 'realDelete'; var funcId =
	 * 'f260104'; deleteItems(grid, action, funcId); } else {
	 * Ext.Msg.alert('系统提示', '您无权进行此项操作'); } }, save: function(button) {
	 * alert("WWW"); var form = button.up('form').form; var action; var funcId;
	 * var status; if (form.findField('id').getValue() == "") { action =
	 * 'insertNewactivity'; funcId = 'f260202'; status = 0; } else { action =
	 * 'updateNewactivity'; funcId = 'f260203'; } var win = button.up('window');
	 * var grid = this.getNewactivity_planGrid(); var freshfn = function() {
	 * win.close(); grid.getStore().reload(); }; var params = { action: action,
	 * funcId: funcId, s_id: session.id }; formSubmit(form, params, freshfn); },
	 * submit: function(button) { var form = button.up('form').form; var action;
	 * var funcId; var status = form.findField('status').getValue(); if
	 * (form.findField('id').getValue() == "") { action = 'insertNewactivity';
	 * funcId = 'f260202'; } else { action = 'updateNewactivity'; funcId =
	 * 'f260203'; } var win = button.up('window'); var grid =
	 * this.getNewactivity_planGrid(); var freshfn = function() { win.close();
	 * grid.getStore().reload(); }; var params = { action: action, funcId:
	 * funcId, s_id: session.id, status:status }; formSubmit(form, params,
	 * freshfn); },
	 */
	submit2saler : function(button) {
		var form = button.up('form').form;
		var action;
		var funcId;
		var status = form.findField('status').getValue();

		action = 'submitNewactivity_plan';
		funcId = 'f260203';
		var f_id = form.findField('chfa_f_id').getValue();//检查是否已经上传了策划方案（前台校验）
	    if(f_id == "")
	    {
	      Ext.Msg.alert('系统提示', '无法提交，请上传策划方案');
	    }
	    else{
		  var win = button.up('window');
		  var grid = this.getNewactivity_planGrid();
		  var freshfn = function() {
		  win.close();
		  grid.getStore().reload();
		}
		var params = {
			action : action,
			funcId : funcId,
			s_id : session.id,
		//	status : status
		};
		formSubmit(form, params, freshfn);
	    }
	},
	submit2charger : function(button) {
		var form = button.up('form').form;
		var action;
		var funcId;
		var status = form.findField('status').getValue();
		action = 'submitNewactivity_plan_3';
		funcId = 'f260203';
		var f_id = form.findField('chhd_f_id').getValue();//检查是否已经上传了策划方案（前台校验）
		var f_id2 = form.findField('chjw_f_id').getValue();
	    if(f_id == "")
	    {
	      Ext.Msg.alert('系统提示', '无法提交，请上传活动流程');
	    }
	    else if(f_id2 == "")
	    {
	    	Ext.Msg.alert('系统提示', '无法提交，请上传教委备案资料');
	    
	    }
	    else{
	    	
	      
		  var win = button.up('window');
		  var grid = this.getNewactivity_planGrid();
		  var freshfn = function() {
		  win.close();
		  grid.getStore().reload();
		}
		var params = {
			action : action,
			funcId : funcId,
			s_id : session.id,
		//	status : status
		};
		formSubmit(form, params, freshfn);
	    }
	}
});