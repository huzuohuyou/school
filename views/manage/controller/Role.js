Ext.define('manage.controller.Role', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'roleGrid',
		selector : 'rolegrid'
	} ],
	views : [ 'role.Grid', 'role.QueryForm', 'role.Form','role.ViewForm'],
	init : function(app) {
		this.control({
			'rolegrid button[action=insert]' : {
				click : this.add
			},
			'rolegrid button[action=query]' : {
				click : this.query
			},
			'rolegrid button[action=delete]' : {
				click : this.deleteItems
			},
			'rolegrid actioncolumn[action=edit]' : {
				click : this.edit
			},
			'rolegrid actioncolumn[action=view]' : {
				click : this.viewDetail
			},
			'roleform button[action=submit]' : {
				click : this.submit
			}
		});
	},
	viewDetail : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b10205') > -1) {
			var formWin = createWin('查看权限信息', 'roleviewform');
			formWin.down('form').loadRecord(record);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	add : function(button) {
		if (session.authority.indexOf('b10202') > -1)
			createWin('添加角色', 'roleform');
		else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	query : function(button) {
		if (session.authority.indexOf('b10201') > -1) {
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
		if (session.authority.indexOf('b10203') > -1) {
			var formWin = createWin('修改角色', 'roleform');
			formWin.down('form').loadRecord(record);
			var pathArray = record.data.authority_path.split(',');
			var ctree = formWin.down('form').form.findField('authority');
			ctree.setDefaultValue(record.data.authority_id, record.data.authority_name);
			ctree.setPathArray(pathArray);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	deleteItems : function(button) {
		if (session.authority.indexOf('b10204') > -1) {
			var grid = button.up('grid');
			var action = 'realDelete';
			var funcId = 'f10204';
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
			funcId = 'f10202';
		} else {
			action = 'updateRole';
			funcId = 'f10203';
		}
		var win = button.up('window');
		var grid = this.getRoleGrid();
		var freshfn = function() {
			win.close();
			grid.getStore().reload();
		};
		var params = {
			action : action,
			funcId : funcId,
			authority_name : form.findField('authority').getDisplayValue(),
			authority_path : form.findField('authority').getPathValue()
		};
		formSubmit(form, params, freshfn);
	}
});