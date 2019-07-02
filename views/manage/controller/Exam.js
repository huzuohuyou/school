Ext.define('manage.controller.Exam', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'examGrid',
		selector : 'examgrid'
	} ],
	views : ['exam.Form','exam.DetailForm','exam.ViewForm'],
	init : function(app) {
		this.control({
			'examgrid button[action=addFirstLevel]' : {
				click : this.addFirstLevel
			},
			'examgrid actioncolumn[action=insert]' : {
				click : this.addNextLevel
			},
			'examgrid button[action=query]' : {
				click : this.query
			},
			'examgrid actioncolumn[action=delete]' : {
				click : this.deleteItems
			},
			'examgrid actioncolumn[action=view]' : {
				click : this.viewDetail
			},
			'examgrid actioncolumn[action=edit]' : {
				click : this.edit
			},
			'examform button[action=submit]' : {
				click : this.examSubmit
			},
			'examdetailform button[action=submit]' : {
				click : this.examDetailSubmit
			}
		});
	},
	addFirstLevel : function(button) {
		if (session.authority.indexOf('b30502') > -1)
			createWin('添加考试信息', 'examform');
		else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	addNextLevel : function(grid, rowIndex, colIndex, actionItem, event,
			record, row) {
		if (session.authority.indexOf('b30502') > -1) {
			if(!record.data.leaf) {
				var win = createWin('添加考试科目', 'examdetailform');
				win.down('form').form.findField('e_id').setValue(record.data.id);
			}
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	query : function(button) {
		if (session.authority.indexOf('b30501') > -1) {
			var grid = button.up('treepanel');
			var form = grid.up('panel').down('form');
			var params = form.getValues();
			var store = grid.getStore();
			store.on("beforeload", function() {
				store.proxy.extraParams = params;
			});
			store.load();
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	edit : function(grid, rowIndex, colIndex, actionItem, event, record, row) {
		if (session.authority.indexOf('b30503') > -1) {
			if(!record.data.leaf) {
				var formWin = createWin('修改考试信息', 'examform');
				formWin.down('form').loadRecord(record);
			}
			else {
				var formWin = createWin('修改考试科目', 'examdetailform');
				formWin.down('form').loadRecord(record);
				var pathArray = record.data.c_path.split(',');
				var ctree = formWin.down('form').form.findField('c_ids');
				ctree.setDefaultValue(record.data.c_ids, record.data.c_name);
				ctree.setPathArray(pathArray);
				formWin.down('form').form.findField('id').setValue(record.data.id.substring(1));
			}
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	deleteItems : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b30504') > -1) {
			var cgrid = this.getExamGrid();
			Ext.MessageBox.show({
				title : '提示信息',
				msg : record.data.leaf?'删除科目，将会删除该科目下已登记的分数<br>确定删除吗？':'删除考试，则删除所有相关信息<br>确定删除吗？',
				icon : Ext.MessageBox.QUESTION,
				buttons : Ext.Msg.YESNO,
				fn : function(btnId, text, opt) {
					if (btnId == "yes") {
						Ext.Msg.wait('处理中，请稍后...', '提示');
						Ext.Ajax.request({
							url : 'system.do',
							// 请求地址
							params : {
								action : 'realDelete',
								ids : record.data.leaf?record.data.id.substring(1):record.data.id,
								funcId : record.data.leaf?'s30504':'f30504'
							},
							// 请求参数
							method : 'post',
							// 方法
							callback : function(options, success, response) {
								if (success) {
									Ext.Msg.hide();
									Ext.MessageBox.show({
										title : '提示信息',
										msg : '删除成功!',
										icon : Ext.MessageBox.INFO,
										buttons : Ext.Msg.OK,
										fn : function() {
											var node = cgrid.getStore()
													.getNodeById(
															record.data.e_id?record.data.e_id:'root');
											cgrid.getStore().load({
												node : node
											});
										}
									});
								} else {
									Ext.Msg.hide();
									Ext.MessageBox.show({
										title : '提示信息',
										msg : '删除失败!',
										icon : Ext.MessageBox.ERROR,
										buttons : Ext.Msg.OK
									});
								}
							}
						});
					}
				}
			});
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	examSubmit : function(button) {
		var form = button.up('form').form;
		var action;
		var funcId;
		if (form.findField('id').getValue() == "") {
			action = 'insert';
			funcId = 'f30502';
		} else {
			action = 'update';
			funcId = 'f30503';
		}
		var win = button.up('window');
		var grid = this.getExamGrid();
		var freshfn = function() {
			win.close();
			grid.getStore().load();
		};
		var params = {
			action : action,
			funcId : funcId
		};
		formSubmit(form, params, freshfn);
	},
	examDetailSubmit : function(button) {
		var form = button.up('form').form;
		var action;
		var funcId;
		if (form.findField('id').getValue() == "") {
			action = 'addExamDetail';
			funcId = 'f30502';
		} else {
			action = 'updateExamDetail';
			funcId = 'f30503';
		}
		var win = button.up('window');
		var grid = this.getExamGrid();
		var node = form.findField('e_id').getValue();
		var freshfn = function() {
			win.close();
			var record = grid.getStore().getNodeById(node);
			grid.getStore().load({
				node : record
			});
		};
		var params = {
			action : action,
			funcId : funcId
		};
		formSubmit(form, params, freshfn);
	}
});