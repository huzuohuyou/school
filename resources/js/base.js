var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
function query(button) {
	var grid = button.up('grid');
	var form = grid.up('panel').down('form');
	var params = form.getValues();
	var store = grid.getStore();
	store.on("beforeload", function() {
		store.proxy.extraParams = params;
	});
	store.loadPage(1);
}
function ajax(url, params, callback, fresh, scope) {
	Ext.Ajax.request({
		url : url ? url : 'system.do', // 请求地址
		params : params, // 请求参数
		method : 'post', // 方法
	    callback : function(options, success, response) {
			var resp = Ext.decode(response.responseText);
			if (success && resp.success) {
			//	Ext.Msg.hide();
				Ext.MessageBox.show({
					title : '提示信息',
					msg : resp.msg?resp.msg:'操作成功!',
					icon : Ext.MessageBox.INFO,
					buttons : Ext.Msg.OK,
					fn : fresh,
					scope : scope?scope:this
				});
			} else {
			//	Ext.Msg.hide();
				Ext.MessageBox.show({
					title : '提示信息',
					msg : resp.msg?resp.msg:'操作失败!',
					icon : Ext.MessageBox.ERROR,
					buttons : Ext.Msg.OK
				});
			}
		}
	});
}
function createWin(title, component) {
	return Ext.create('Ext.window.Window', {
		resizable : false,
		modal : true,
		title : title,
		layout : 'fit',
		items : [ {
			xtype : component
		} ],
		autoShow : true
	});
}
function formSubmit(form, params, freshfn, url) {
	form.submit({
		waitMsg : '正在保存数据,请等待...',
		clientValidation : true,
		url : url ? url : 'system.do?',
		params : params,
		submitEmptyText: false,
		success : function(form, action) {
			top.Ext.Msg.alert('操作成功', action.result.msg, freshfn);
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
				Ext.Msg.alert('操作失败', action.result.msg);
			}
		}
	});
}
function  resetteachersign(grid,action,funcId,url) {
	var store = grid.getStore();
	var refresh = store.reload;
	var records = grid.getSelectionModel().getSelection();
    if (records.length == 0){
    	
	Ext.MessageBox.show({
		title : '提示信息',
		msg : '确定要重置教师签到吗？',
		icon : Ext.MessageBox.QUESTION,
		buttons : Ext.Msg.YESNO,
		fn : function(btnId, text, opt) {
			if (btnId == "yes") {
				Ext.Msg.wait('处理中，请稍后...', '提示');
				Ext.Ajax.request({
					url : url ? url : 'system.do', // 请求地址
					params : {
						action : action,
					  //  numbers:numbers,
						funcId : funcId
					}, // 请求参数
					method : 'post', // 方法
					callback : function(options, success, response) {
						var resp = Ext.decode(response.responseText);
						if (success && resp.success) {
							Ext.Msg.hide();
							Ext.MessageBox.show({
								title : '提示信息',
								msg : resp.msg,
								icon : Ext.MessageBox.INFO,
								buttons : Ext.Msg.OK,
								fn : refresh,
								scope : store
							});
						} else {
							Ext.Msg.hide();
							Ext.MessageBox.show({
								title : '提示信息',
								msg : resp.msg ? resp.msg : '操作失败',
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
	}


function  resetsign(grid,action,funcId,url) {
	var store = grid.getStore();
	var refresh = store.reload;
	var records = grid.getSelectionModel().getSelection();
	if (records.length == 0) {
		Ext.MessageBox.show({
			title : '提示信息',
			msg : '请先勾选要重置签到的学生!',
			icon : Ext.MessageBox.WARNING,
			buttons : Ext.Msg.OK
		});
		return;
	} else{
	var numbers = "";
		for ( var i = 0;i<grid.getStore().getCount(); i++) {
			numbers += grid.getStore().getAt(i).data.number;
			if (i < records.length - 1)
				numbers += ',';
		}

	Ext.MessageBox.show({
		title : '提示信息',
		msg : '确定要重置签到吗？',
		icon : Ext.MessageBox.QUESTION,
		buttons : Ext.Msg.YESNO,
		fn : function(btnId, text, opt) {
			if (btnId == "yes") {
				Ext.Msg.wait('处理中，请稍后...', '提示');
				Ext.Ajax.request({
					url : url ? url : 'system.do', // 请求地址
					params : {
						action : action,
					    numbers:numbers,
						funcId : funcId
					}, // 请求参数
					method : 'post', // 方法
					callback : function(options, success, response) {
						var resp = Ext.decode(response.responseText);
						if (success && resp.success) {
							Ext.Msg.hide();
							Ext.MessageBox.show({
								title : '提示信息',
								msg : resp.msg,
								icon : Ext.MessageBox.INFO,
								buttons : Ext.Msg.OK,
								fn : refresh,
								scope : store
							});
						} else {
							Ext.Msg.hide();
							Ext.MessageBox.show({
								title : '提示信息',
								msg : resp.msg ? resp.msg : '操作失败',
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
}
/*
function selectcourse(grid,action,funcId,url) {
	var store = grid.getStore();
	var refresh = store.reload;
	var records = grid.getSelectionModel().getSelection();
	if (records.length == 0) {
		Ext.MessageBox.show({
			title : '提示信息',
			msg : '请先勾选要选择的课程!',
			icon : Ext.MessageBox.WARNING,
			buttons : Ext.Msg.OK
		});
		return;
	} else {
		var name = "";
		for ( var i = 0; i < records.length; i++) {
			name += records[i].get("name");
			if (i < records.length - 1)
				name += ',';
		}
	    var week = "";
	    for ( var i = 0; i < records.length; i++) {
			week += records[i].get("week");
			if (i < records.length - 1)
				week += ',';
		}
	    var grad = "";
	    for ( var i = 0; i < records.length; i++) {
			grad += records[i].get("stage");
			if (i < records.length - 1)
				grad += ',';
		}
	
	   
	Ext.MessageBox.show({
		title : '提示信息',
		msg : '确定选择该课吗？',
		icon : Ext.MessageBox.QUESTION,
		buttons : Ext.Msg.YESNO,
		fn : function(btnId, text, opt) {
			if (btnId == "yes") {
				Ext.Msg.wait('处理中，请稍后...', '提示');
				
				Ext.Ajax.request({
					url : url ? url : 'system.do', // 请求地址
					params : {
						action : action,
						name : name,
						week: week,
						grad: grad,
						funcId : funcId
					}, // 请求参数
					
					method : 'post', // 方法
					callback : function(options, success, response) {
						var resp = Ext.decode(response.responseText);
						if (success && resp.success) {
							Ext.Msg.hide();
							Ext.MessageBox.show({
								title : '提示信息',
								msg : resp.msg,
								icon : Ext.MessageBox.INFO,
								buttons : Ext.Msg.OK,
								fn : refresh,
								scope : store
							});
						} else {
							Ext.Msg.hide();
							Ext.MessageBox.show({
								title : '提示信息',
								msg : resp.msg ? resp.msg : '操作失败',
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
	
}
*/
function dropcourse(grid,action,funcId,url) {
	var store = grid.getStore();
	var refresh = store.reload;
	var records = grid.getSelectionModel().getSelection();
	if (records.length == 0) {
		Ext.MessageBox.show({
			title : '提示信息',
			msg : '请先勾选要退的课程!',
			icon : Ext.MessageBox.WARNING,
			buttons : Ext.Msg.OK
		});
		return;
	} else {
		var ids = "";
		for ( var i = 0; i < records.length; i++) {
			ids += records[i].get("id");
			if (i < records.length - 1)
				ids += ',';
		}
	    var c_id = "";
	    for ( var i = 0; i < records.length; i++) {
			c_id += records[i].get("number");
			if (i < records.length - 1)
				c_id += ',';
		}
	    var c_name = "";
	    for ( var i = 0; i < records.length; i++) {
			c_name += records[i].get("c_name");
			if (i < records.length - 1)
				c_name += ',';
		}
	

	Ext.MessageBox.show({
		title : '提示信息',
		msg : '确定退课吗？',
		icon : Ext.MessageBox.QUESTION,
		buttons : Ext.Msg.YESNO,
		fn : function(btnId, text, opt) {
			if (btnId == "yes") {
				Ext.Msg.wait('处理中，请稍后...', '提示');
				Ext.Ajax.request({
					url : url ? url : 'system.do', // 请求地址
					params : {
						action : action,
						ids : ids,
						c_id: c_id,
						c_name: c_name,
						funcId : funcId
					}, // 请求参数
					method : 'post', // 方法
					callback : function(options, success, response) {
						var resp = Ext.decode(response.responseText);
						if (success && resp.success) {
							Ext.Msg.hide();
							Ext.MessageBox.show({
								title : '提示信息',
								msg : resp.msg,
								icon : Ext.MessageBox.INFO,
								buttons : Ext.Msg.OK,
								fn : refresh,
								scope : store
							});
						} else {
							Ext.Msg.hide();
							Ext.MessageBox.show({
								title : '提示信息',
								msg : resp.msg ? resp.msg : '操作失败',
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
}
function deleteClassStudent(grid,action,funcId,url) {
	var store = grid.getStore();
	var refresh = store.reload;
	var records = grid.getSelectionModel().getSelection();
	if (records.length == 0) {
		Ext.MessageBox.show({
			title : '提示信息',
			msg : '请先勾选要删除的学生!',
			icon : Ext.MessageBox.WARNING,
			buttons : Ext.Msg.OK
		});
		return;
	} else {
		var ids = "";
		for ( var i = 0; i < records.length; i++) {
			ids += records[i].get("id");
			if (i < records.length - 1)
				ids += ',';
		}
		var class_ids = "";
		for ( var i = 0; i < records.length; i++) {
			class_ids = records[i].get("class_id");
		}
		
	Ext.MessageBox.show({
		title : '提示信息',
		msg : '确定退课吗？',
		icon : Ext.MessageBox.QUESTION,
		buttons : Ext.Msg.YESNO,
		fn : function(btnId, text, opt) {
			if (btnId == "yes") {
				Ext.Msg.wait('处理中，请稍后...', '提示');
				alert(class_ids);
				Ext.Ajax.request({
					url : url ? url : 'system.do', // 请求地址
					params : {
						action : action,
						ids : ids,
						class_ids: class_ids,
						funcId : funcId
					}, // 请求参数
					method : 'post', // 方法
					callback : function(options, success, response) {
						var resp = Ext.decode(response.responseText);
						if (success && resp.success) {
							Ext.Msg.hide();
							Ext.MessageBox.show({
								title : '提示信息',
								msg : resp.msg,
								icon : Ext.MessageBox.INFO,
								buttons : Ext.Msg.OK,
								fn : refresh,
								scope : store
							});
						} else {
							Ext.Msg.hide();
							Ext.MessageBox.show({
								title : '提示信息',
								msg : resp.msg ? resp.msg : '操作失败',
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
}
function deleteteachersign(grid, action, funcId, url) {
	var store = grid.getStore();
	var refresh = store.reload;
	var records = grid.getSelectionModel().getSelection();
	if (records.length == 0) {
		Ext.MessageBox.show({
			title : '提示信息',
			msg : '请先勾选要删除的条目!',
			icon : Ext.MessageBox.WARNING,
			buttons : Ext.Msg.OK
		});
		return;
	} else {
		var ids = "";
		for ( var i = 0; i < records.length; i++) {
			ids += records[i].get("id");
			if (i < records.length - 1)
				ids += ',';
		}
	
		Ext.MessageBox.show({
			title : '提示信息',
			msg : '签到记录删除不可恢复，确定删除吗？',
			icon : Ext.MessageBox.QUESTION,
			buttons : Ext.Msg.YESNO,
			fn : function(btnId, text, opt) {
				if (btnId == "yes") {
					Ext.Msg.wait('处理中，请稍后...', '提示');
					Ext.Ajax.request({
						url : url ? url : 'system.do', // 请求地址
						params : {
							action : action,
							ids : ids,
							funcId : funcId
						}, // 请求参数
						method : 'post', // 方法
						callback : function(options, success, response) {
							var resp = Ext.decode(response.responseText);
							if (success && resp.success) {
								Ext.Msg.hide();
								Ext.MessageBox.show({
									title : '提示信息',
									msg : resp.msg,
									icon : Ext.MessageBox.INFO,
									buttons : Ext.Msg.OK,
									fn : refresh,
									scope : store
								});
							} else {
								Ext.Msg.hide();
								Ext.MessageBox.show({
									title : '提示信息',
									msg : resp.msg ? resp.msg : '操作失败',
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
}
function deleteItems(grid, action, funcId, url) {
	var store = grid.getStore();
	var refresh = store.reload;
	var records = grid.getSelectionModel().getSelection();
	if (records.length == 0) {
		Ext.MessageBox.show({
			title : '提示信息',
			msg : '请先勾选要删除的条目!',
			icon : Ext.MessageBox.WARNING,
			buttons : Ext.Msg.OK
		});
		return;
	} else {
		var ids = "";
		for ( var i = 0; i < records.length; i++) {
			ids += records[i].get("id");
			if (i < records.length - 1)
				ids += ',';
		}
		Ext.MessageBox.show({
			title : '提示信息',
			msg : '确定删除吗？',
			icon : Ext.MessageBox.QUESTION,
			buttons : Ext.Msg.YESNO,
			fn : function(btnId, text, opt) {
				if (btnId == "yes") {
					Ext.Msg.wait('处理中，请稍后...', '提示');
					Ext.Ajax.request({
						url : url ? url : 'system.do', // 请求地址
						params : {
							action : action,
							ids : ids,
							funcId : funcId
						}, // 请求参数
						method : 'post', // 方法
						callback : function(options, success, response) {
							var resp = Ext.decode(response.responseText);
							if (success && resp.success) {
								Ext.Msg.hide();
								Ext.MessageBox.show({
									title : '提示信息',
									msg : resp.msg,
									icon : Ext.MessageBox.INFO,
									buttons : Ext.Msg.OK,
									fn : refresh,
									scope : store
								});
							} else {
								Ext.Msg.hide();
								Ext.MessageBox.show({
									title : '提示信息',
									msg : resp.msg ? resp.msg : '操作失败',
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
}
