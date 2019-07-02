Ext.define('manage.controller.User', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'userGrid',
		selector : 'usergrid'
	} ],
	views : [ 'user.Grid', 'user.QueryForm', 'user.Form', 'user.ViewForm' ],
	init : function(app) {
		this.control({
			'usergrid button[action=insert]' : {
				click : this.add
			},
			'usergrid button[action=query]' : {
				click : this.query
			},
			'usergrid button[action=delete]' : {
				click : this.deleteItems
			},
			'usergrid actioncolumn[action=edit]' : {
				click : this.edit
			},
			'usergrid actioncolumn[action=view]' : {
				click : this.viewDetail
			},
			'userform button[action=submit]' : {
				click : this.submit
			}
		});
	},
	viewDetail : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b10105') > -1) {
			var formWin = createWin('查看用户信息', 'userviewform');
			formWin.down('form').loadRecord(record);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	add : function(button) {
		if (session.authority.indexOf('b10102') > -1)
			createWin('添加用户', 'userform');
		else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	query : function(button) {
		if (session.authority.indexOf('b10101') > -1) {
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
		if (session.authority.indexOf('b10103') > -1) {
			var formWin = createWin('修改用户', 'userform');
			formWin.down('form').loadRecord(record);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	deleteItems : function(button) {
		if (session.authority.indexOf('b10104') > -1) {
			var grid = button.up('grid');
			var action = 'delete';
			var funcId = 'f10104';
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
			action = 'insert';
			funcId = 'f10102';
		} else {
			action = 'update';
			funcId = 'f10103';
		}
		var win = button.up('window');
		var grid = this.getUserGrid();
		var freshfn = function() {
			win.close();
			grid.getStore().reload();
		};
		var params = {
			action : action,
			funcId : funcId,
			role_name : form.findField('role_id').getRawValue()
		};
		formSubmit(form, params, freshfn);
	}
});