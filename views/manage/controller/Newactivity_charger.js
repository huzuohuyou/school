Ext.define('manage.controller.Newactivity_charger', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'newactivity_chargerGrid',
		selector : 'newactivity_chargergrid'
	} ],
	views : [ 'newactivity_charger.WorkOrderForm','newactivity_charger.QueryForm' ],
	init : function(app) {
		this.control({
			'newactivity_chargergrid button[action=query]' : {
				click : this.query
			},
			'newactivity_chargergrid actioncolumn[action=wedit]' : {
				click : this.wedit
			},
			'chargernewworkorderform button[action=submit2execute]' : {
				click : this.submit2execute
			},
			
			
			
			//这是当前执行上传工单的信息
			
			'chargernewworkorderform button[action=submit2charger]' : {
				click : this.submit2charger
			},
			
			
			'newactivity_chargergrid button[action=view]': {
                click: this.view
            },
            'newactivity_chargergrid button[action=activityToExcel]': {
                click: this.activityToExcel
            },
		});
	},
	activityToExcel : function(button) {
    	var grid = this.getNewactivity_chargerGrid();
		var store = grid.getStore();
		var ids = "";
		var names = "";
		var saler_names = "";
		var themes = "";
		var types = "";
		var school_names = "";
		var create_times = "";
		var statuss = "";
		for (var i = 0; i < store.getCount(); i++) {
		    var record = store.getAt(i);
		    ids = ids + record.get('id')+",";
		    names = names + record.get('name')+",";
		    saler_names = saler_names + record.get('saler_name')+",";
		    themes = themes + record.get('theme')+",";
		    types = types + record.get('type')+",";
		    school_names = school_names + record.get('school_name')+",";
		    create_times = create_times + record.get('create_time')+",";
		    statuss = statuss + record.get('status')+",";
		};
		 Ext.MessageBox.show({
				title : '提示信息',
				msg : '确定要导出到本地吗？',
				icon : Ext.MessageBox.QUESTION,
				buttons : Ext.Msg.YESNO,
				fn : function(btnId, text, opt) {
					if (btnId == "yes") {
						Ext.Msg.wait('处理中，请稍后...', '提示');
    	                Ext.Ajax.request({
				url : 'system.do',
				// 请求地址
			    params : {
	                     action: 'activityToExcel',
	                     ids:ids,
	                     names:names,
	                     saler_names:saler_names,
	                     themes:themes,
	                     types:types,
	                     school_names:school_names,
	                     create_times:create_times,
	                     statuss:statuss
	                 },
				// 请求参数
				method : 'post',
				// 方法
				callback : function(options, success, response) {
					var resp = Ext.decode(response.responseText);
					if (success&&resp.success) {
						Ext.Msg.hide();
						var f_id = resp.msg;
						Ext.create('Ext.window.Window', {
							title : '下载统计表',
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
								id : 'planForm',
								buttonAlign : 'center',
								border : false,
								items : [ {
									xtype : 'displayfield',
									fieldLabel : '活动统计表',
									name : 'file_name',
									value:'<a target="_blank" href=system.do?action=downloadFile&f_id='+f_id+'>'+"活动统计表"+'</a>',
									colspan : 1,
									width : 500
								}, {
									xtype : 'hidden',
									name : 'f_id',
									value:f_id
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
					} else {
						//Ext.Msg.hide();
						Ext.MessageBox.show({
							title : '提示信息',
							msg : resp.msg?resp.msg:'下载失败!',
							icon : Ext.MessageBox.ERROR,
							buttons : Ext.Msg.OK
						});
					}
				}
			});
					}
 				}
 			});
	},
	
	
	
	//submit2charger : function(button) {
		//var form = button.up('form').form;
		//var action;
		//var status = form.findField('status').getValue();		
		//action = 'zhixing_tijiao';
		//var f_id = form.findField('chhd_f_id').getValue();//检查是否已经上传了策划方案（前台校验）
	//	var f_id2 = form.findField('chjw_f_id').getValue();
		
						
	 //   if(f_id == "")
	 //   {
	 //     Ext.Msg.alert('系统提示', '无法提交，请上传活动流程');
	      
	 //   }
	 //   else if(f_id2 == "")
	 //   {
	   // 	Ext.Msg.alert('系统提示', '无法提交，请上传教委备案资料');
	   
	   // }
	    
	    
	 //   else if(status>=4){
	    
	//    Ext.Msg.alert('系统系统','当前的阶段无法进行上传');		
	    	
	 //   }
	    
	    
	    
	       
	    
	  //  else{
	    	
	      
	//	  var win = button.up('window');
	//	  var grid = this.getNewactivity_chargerGrid();
	//	  var freshfn = function() {
	//	  win.close();
	//	  grid.getStore().reload();
	//	}
		  
		
		
		
		
		
	//	var params = {
	//		action : action,
	//		s_id : session.id,
		//	status : status
	//	};
	//	formSubmit(form, params, freshfn);
	 //   }
	//},
		
	
	
	
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
	    
	    
	    else if(status>=4){
	    
		Ext.Msg.alert('系统系统','当前的阶段无法进行上传');		
		    	
		}
	    	    
	    else {
	    	      
		  var win = button.up('window');
		  var grid = this.getNewactivity_chargerGrid();
		  
		  var freshfn = function()  {
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
	
	
	
	view: function(button) {
	    	 window.location.href="activityCalinder.html";
	     
	    },
	wedit : function(grid, rowIndex, colIndex, actionItem, event, record, row) {
		if (session.authority.indexOf('b260302') > -1) {
			var formWin = createWin('查看活动工单', 'chargernewworkorderform');
			formWin.down('form').loadRecord(record);
			var status = record.data.status;
			formWin.down('form').form.findField('states').setValue(record.data.status);
			formWin.down('form').form.findField('ap_name2').setValue(record.data.ap_name);
			formWin.down('form').form.findField('ap_name3').setValue("执行主管");
			formWin.down('form').form.findField('ae_name2').setValue(record.data.ae_name);
	        formWin.down('form').form.findField('saler_name2').setValue(record.data.saler_name);
	        formWin.down('form').form.findField('name2').setValue(record.data.name);
		   // formWin.down('form').form.findField('xs_f_nameLink').setValue('<a target="_blank" href=system.do?action=downloadFile&f_id='+record.data.xs_f_id+'>'+record.data.xs_f_name+'</a>');
	        formWin.down('form').form.findField('xs_f_nameLink').setValue(record.data.xs_f_name); 
		   
		    formWin.down('form').form.findField('chfa_f_nameLink').setValue('<a target="_blank" href=system.do?action=downloadFile&f_id='+ record.data.chfa_f_id + '>' + record.data.chfa_f_name+ '</a>');
		    
		    
		    
		    formWin.down('form').form.findField('chhd_f_nameLink').setValue('<a target="_blank" href=system.do?action=downloadFile&f_id='+ record.data.chhd_f_id + '>' + record.data.chhd_f_name+ '</a>');
		    formWin.down('form').form.findField('chjw_f_nameLink').setValue('<a target="_blank" href=system.do?action=downloadFile&f_id='+ record.data.chjw_f_id + '>' + record.data.chjw_f_name+ '</a>');
		    
		    
		    
			formWin.down('form').form.findField('cdbg_f_nameLink').setValue('<a target="_blank" href=system.do?action=downloadFile&f_id='+record.data.cdbg_f_id+'>'+record.data.cdbg_f_name+'</a>');
			formWin.down('form').form.findField('yjya_f_nameLink').setValue('<a target="_blank" href=system.do?action=downloadFile&f_id='+ record.data.yjya_f_id + '>' + record.data.yjya_f_name+ '</a>');
			formWin.down('form').form.findField('hdxz_f_nameLink').setValue('<a target="_blank" href=system.do?action=downloadFile&f_id='+ record.data.hdxz_f_id + '>' + record.data.hdxz_f_name+ '</a>');
			formWin.down('form').form.findField('zxbz_f_nameLink').setValue('<a target="_blank" href=system.do?action=downloadFile&f_id='+ record.data.zxbz_f_id + '>' + record.data.zxbz_f_name+ '</a>');
			formWin.down('form').form.findField('fkjg_f_nameLink').setValue('<a target="_blank" href=system.do?action=downloadFile&f_id='+ record.data.fkjg_f_id + '>' + record.data.fkjg_f_name+ '</a>');
			if(status > 4){
	              Ext.getCmp('submit2execute').setDisabled(true);
	            }
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	
	
	
	

	
	
	query : function(button) {
		if (session.authority.indexOf('b260301') > -1) {
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
	submit2execute : function(button) {
		var form = button.up('form').form;
		var action;
		var funcId;
		var status = form.findField('status').getValue();
		if(status == 4){
		 action = 'submitNewactivity_execute';
		 funcId = 'f260303';
		 var win = button.up('window');
		 var grid = this.getNewactivity_chargerGrid();
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
		else{
			Ext.Msg.alert('系统提示', '当前阶段不能指派执行人员');
		}
	}
});