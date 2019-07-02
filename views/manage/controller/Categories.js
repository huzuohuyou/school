Ext.define('manage.controller.Categories', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'categoriesGrid',
		selector : 'categoriesgrid'
	} ],
	views : [ 'categories.Form','categories.EditForm' ],
	init : function(app) {
		this.control({
			'categoriesgrid button[action=addFirstLevel]' : {
				click : this.addFirstLevel
			},
			'categoriesgrid actioncolumn[action=insert]' : {
				click : this.addNextLevel
			},
			'categoriesgrid actioncolumn[action=edit]' : {
				click : this.edit
			},
			'categoriesgrid actioncolumn[action=delete]' : {
				click : this.deleteItems
			},
			'categoriesgrid actioncolumn[action=showornot]' : {
				click : this.showornot
			},
			'categoriesform button[action=submit]' : {
				click : this.submit
			},
			'categorieseditform button[action=submit]' : {
				click : this.submit
			}
		});
	},
	addFirstLevel : function(button) {
		if (session.authority.indexOf('b20102') > -1)
			createWin('添加一级菜单', 'categoriesform');
		else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	addNextLevel : function(grid, rowIndex, colIndex, actionItem, event,
			record, row) {
		if (session.authority.indexOf('b20102') > -1) {
			if(record.data.level==1) {
				var win = createWin('添加二级菜单', 'categoriesform');
				win.down('form').form.findField('p_id').setValue(record.data.id);
				win.down('form').form.findField('level').setValue(2);
			}
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	showornot : function(grid, rowIndex, colIndex, actionItem, event,
			record, row) {
		if (session.authority.indexOf('b20104') > -1) {
			if(record.data.level==1) {
				var default_flag = record.data.default_flag == '1' ? '0': '1';
				var store = grid.getStore();
		        var refresh = store.reload;
		        Ext.Msg.wait('处理中，请稍后...', '提示');
				var params = {
		                action: 'update',
		                id: record.data.id,
		                default_flag: default_flag,
		                funcId: 'f20105'
		            };
		            ajax(null, params, null, refresh, store);
			}
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	edit : function(grid, rowIndex, colIndex, actionItem, event, record, row) {
		console.log(123);
		if (session.authority.indexOf('b20103') > -1) {
			var formWin = createWin('修改菜单', 'categorieseditform');
			formWin.down('form').loadRecord(record);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	deleteItems : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b20104') > -1) {
			if(record.data.default_flag == 1) {
				Ext.msg.alert('系统提示','系统默认菜单不可删除');
				return;
			}
			var cgrid = this.getCategoriesGrid();
			Ext.MessageBox.show({
				title : '提示信息',
				msg : '确定删除吗？',
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
								ids : record.data.id,
								funcId : 'f20104'
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
															record.data.p_id);
											cgrid.getStore().load({
												node : node
											});
											ajax('system.do',{action:'reloadCache'});
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
	submit : function(button) {
		var form = button.up('form').form;
		var action;
		var funcId;
		if (form.findField('id').getValue() == "") {
			action = 'insert';
			funcId = 'f20102';
		} else {
			action = 'update';
			funcId = 'f20103';
		}
		var win = button.up('window');
		var grid = this.getCategoriesGrid();
		var node = form.findField('p_id').getValue();
		var freshfn = function() {
			win.close();
			var record = grid.getStore().getNodeById(node);
			grid.getStore().load({
				node : record
			});
			ajax('system.do',{action:'reloadCache'});
		};
		var params = {
			action : action,
			funcId : funcId
		};
		formSubmit(form, params, freshfn);
	}
});