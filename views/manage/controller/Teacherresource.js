Ext.define('manage.controller.Teacherresource', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'teacherresourceGrid',
		selector : 'teacherresourcegrid'
	}, {
		ref : 'teacherpicGrid',
		selector : 'teacherpicgrid'
	},{
		ref : 'teacherplanGrid',
		selector : 'teacherplangrid'
	}
	],
	views : [ 'teacherresource.Grid', 'teacherresource.QueryForm','teacherresource.TeacherPicViewForm','teacherresource.TeacherPlanViewForm','teacherresource.ViewForm','teacherresource.TeacherPicQueryForm','teacherresource.DownloadPicForm'],
	init : function(app) {
		this.control({
			'teacherresourcegrid button[action=query]' : {
				click : this.query
			},
            'teacherresourcegrid actioncolumn[action=downloadPicture]': {
	            click: this.downloadPicture
	        },
	        'teacherresourcegrid actioncolumn[action=downloadPlan]': {
                click: this.downloadPlan
            },
            'teacherresourcegrid actioncolumn[action=viewsummary]': {
                click: this.deleteItems
            },
            'teacherpicgrid actioncolumn[action=view]': {
                click: this.viewDetail
            },
            'teacherplangrid actioncolumn[action=viewPlan]': {
                click: this.viewPlan
            },
            'teacherpicgrid button[action=downloadAllPics]' : {
				click : this.downloadAllPics
			},
			'teacherplangrid button[action=downloadAllPlans]' : {
				click : this.downloadAllPlans
			}
		});
	},
	downloadAllPics: function(button) {
		   
		var form = button.up('form').form;
		var t_id = form.findField('teacher_id').getValue();
		var t_name = form.findField('t_name').getValue();
		var action;
		var funcId;
		var grid = this.getTeacherpicGrid();
		var store = grid.getStore();	
        var count = store.getCount();
		if(count == 0){
			Ext.Msg.alert('系统提示', '该教师没有上传任何图片！');
		}
		else{
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
				    	action : 'downloadTeacherPics',
						funcId : 'f250107',
						t_id:t_id,
						t_name:t_name
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
								title : '点击下载教师上传图片',
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
									//	fieldLabel : '学校整体情况',
										name : 'file_name',
										value:'<a target="_blank" href=system.do?action=downloadFile&f_id='+f_id+'>'+"教师上传图片下载"+'</a>',
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
								msg : resp.msg?resp.msg:'批量下载教师上传图片失败!',
								icon : Ext.MessageBox.ERROR,
								buttons : Ext.Msg.OK
							});
						}
					}
				});
						}
	 				}
	 			});
		}				
	},
	downloadAllPlans: function(button) {
			   
			var form = button.up('form').form;
			var t_id = form.findField('teacher_id').getValue();
			var t_name = form.findField('t_name').getValue();
			var action;
			var funcId;
			var grid = this.getTeacherplanGrid();
			var store = grid.getStore();
			var count = store.getCount();
			if(count == 0){
				Ext.Msg.alert('系统提示', '该教师没有上传任何教案！');
			}
			else{
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
					    	action : 'downloadTeacherPlans',
							funcId : 'f250107',
							t_id:t_id,
							t_name:t_name
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
									title : '点击下载教师上传图片',
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
											name : 'file_name',
											value:'<a target="_blank" href=system.do?action=downloadFile&f_id='+f_id+'>'+"教师上传教案下载"+'</a>',
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
									msg : resp.msg?resp.msg:'批量下载教师教案失败!',
									icon : Ext.MessageBox.ERROR,
									buttons : Ext.Msg.OK
								});
							}
						}
					});
							}
		 				}
		 			});
			}			
			},
	viewDetail : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b250106') > -1) {
			var formWin = createWin('查看照片信息', 'teacherpictureviewform');
			formWin.down('form').loadRecord(record);
			Ext.getCmp('browseImage').getEl().dom.src = record.data.pic;
		//	formWin.down('panel[name=content]').update(record.data.content);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	viewPlan : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b250110') > -1) {
			Ext.create('Ext.window.Window', {
				title : '下载教案',
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
						fieldLabel : '教案',
						name : 'file_name',
						value:'<a target="_blank" href=system.do?action=downloadPlan&f_id='+record.data.id+'>'+record.data.name+'</a>',
						colspan : 1,
						width : 500
					}, {
						xtype : 'hidden',
						name : 'f_id',
						value: record.data.id
					}, {
						xtype : 'hidden',
						name : 'file_name',
						value: record.data.name
						
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
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	 downloadPlan: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
	        if (session.authority.indexOf('b250108') > -1) {
	        	
	            var formWin = createWin('教师上传教案列表', 'teacherplanviewform');
	            var grid = formWin.down('grid');
	            formWin.down('form').loadRecord(record);
	            formWin.down('form').form.findField('teacher_id').setValue(record.data.id);
	            formWin.down('form').form.findField('t_name').setValue(record.data.name);
	            var params = {
	  	              teacher_id: record.data.id,
	  	             };
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
	        if (session.authority.indexOf('b180204') > -1) {
	            var grid = button.up('grid');
	            var action = 'realDelete';
	            var funcId = 'f180204';
	            deleteItems(grid, action, funcId);
	        } else {
	            Ext.Msg.alert('系统提示', '您无权进行此项操作');
	        }
	    },
	  downloadPicture: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
	        if (session.authority.indexOf('b250102') > -1) {
	        	
	            var formWin = createWin('教师上传图片列表', 'teacherpicviewform');
	            var grid = formWin.down('grid');
	            formWin.down('form').loadRecord(record);
	            formWin.down('form').form.findField('teacher_id').setValue(record.data.id);
	            formWin.down('form').form.findField('t_name').setValue(record.data.name);
	            var params = {
	  	              teacher_id: record.data.id,
	  	             };
	             
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
	   query : function(button) {
		if (session.authority.indexOf('b250101') > -1) {
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
	 queryCourse : function(button) {
			if (session.authority.indexOf('b250105') > -1) {
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
	 submit: function(button) {
	        var form = button.up('form').form;
	        var action= 'insertevaluate';
	        var funcId= 'f180202';
	    	var ssd_id = form.findField('ssd_id').getValue();
	        var teacher_id = form.findField('teacher_id').getValue();
	        var c_id = form.findField('c_id').getValue();
	        var win = button.up('window');
	        var grid = this.getEvaluateGrid();
	        var freshfn = function() {
	            win.close();
	            grid.getStore().reload();
	        };
	        var params = {
	            action: action,
	            funcId: funcId,
	            ssd_id:ssd_id,
	            teacher_id:teacher_id,
	            c_id:c_id,
	            charger:session.id
	      
	        };
	        formSubmit(form, params, freshfn);
	 }
});