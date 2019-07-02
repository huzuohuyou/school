Ext.define('manage.controller.Schedules', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'schedulesGrid',
		selector : 'schedulesgrid'
	} ],
	views : ['schedules.Form','schedules.ViewForm'],
	init : function(app) {
		this.control({
			'schedulesgrid button[action=insert]' : {
				click : this.add
			},
			'schedulesgrid button[action=query]' : {
				click : this.query
			},
			'schedulesgrid button[action=delete]' : {
				click : this.deleteItems
			},
			'schedulesgrid actioncolumn[action=view]' : {
				click : this.viewDetail
			},
			'schedulesgrid actioncolumn[action=edit]' : {
				click : this.edit
			},
			'schedulesform button[action=submit]' : {
				click : this.submit
			}
		});
	},
	viewDetail : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b30405') > -1) {
			ajax(null,{action:'queryByCondition',s_id:record.data.id,funcId:'s00005'},function(options, success, response){
				if(success) {
					var formWin = createWin('查看课表信息', 'schedulesviewform');
					formWin.down('form').loadRecord(record);
					var resp = Ext.decode(response.responseText);
					var data = resp.data;
					for(var i=0;i<data.length;i++) {
						var temp = data[i];
						formWin.down('form').form.findField(temp.type).setValue('<span style="color:blue;">'+temp.c_name+'</span>');
					}
				}
				else {
					Ext.MessageBox.show({
						title : '提示信息',
						msg : '数据加载失败!请稍后重试',
						icon : Ext.MessageBox.ERROR,
						buttons : Ext.Msg.OK
					});
				}
			});
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	add : function(button) {
		if (session.authority.indexOf('b30402') > -1)
			createWin('添加课表', 'schedulesform');
		else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	query : function(button) {
		if (session.authority.indexOf('b30401') > -1) {
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
	edit : function(grid, rowIndex, colIndex, actionItem, event, record, row) {
		if (session.authority.indexOf('b30403') > -1) {
			ajax(null,{action:'queryByCondition',s_id:record.data.id,funcId:'s00005'},function(options, success, response){
				if(success) {
					var formWin = createWin('修改课表信息', 'schedulesform');
					formWin.down('form').loadRecord(record);
					var pathValue = record.data.c_path;
					var ctree = formWin.down('form').form.findField('c_id');
					ctree.setDefaultValue(record.data.c_id, record.data.c_name);
					ctree.setPathValue(pathValue);
					var resp = Ext.decode(response.responseText);
					var data = resp.data;
					for(var i=0;i<data.length;i++) {
						var temp = data[i];
						formWin.down('form').form.findField(temp.type).setValue(temp.c_id);
					}
				}
				else {
					Ext.MessageBox.show({
						title : '提示信息',
						msg : '数据加载失败!请稍后重试',
						icon : Ext.MessageBox.ERROR,
						buttons : Ext.Msg.OK
					});
				}
			});
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	deleteItems : function(button) {
		if (session.authority.indexOf('b30404') > -1) {
			var grid = button.up('grid');
			var action = 'realDelete';
			var funcId = 'f30404';
			deleteItems(grid, action, funcId);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	submit : function(button) {
		var form = button.up('form').form;
		var action;
		var funcId;
		if (form.findField('id').getValue() == "") {
			action = 'addSchedules';
			funcId = 'f30402';
		} else {
			action = 'updateSchedules';
			funcId = 'f30403';
		}
		var win = button.up('window');
		var grid = this.getSchedulesGrid();
		var freshfn = function() {
			win.close();
			grid.getStore().reload();
		};
		var params = {
			action : action,
			funcId : funcId
		};
		formSubmit(form, params, freshfn);
	}
});