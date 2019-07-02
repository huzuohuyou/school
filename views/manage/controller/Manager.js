Ext.define('manage.controller.Manager', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'managerGrid',
		selector : 'managergrid'
	} ],
	views : [ 'manager.Grid', 'manager.QueryForm', 'manager.Form' ],
	init : function(app) {
		this.control({
			'managergrid button[action=insert]' : {
				click : this.add
			},
			'managergrid button[action=query]' : {
				click : this.query
			},
			'managergrid button[action=delete]' : {
				click : this.deleteItems
			},
			'managergrid actioncolumn[action=edit]' : {
				click : this.edit
			},
			'managerform button[action=submit]' : {
				click : this.submit
			}
		});
	},
	add : function(button) {
		if (session.authority.indexOf('b10302') > -1)
			createWin('添加主管', 'managerform');
		else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	query : function(button) {
		if (session.authority.indexOf('b10301') > -1) {
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
		if (session.authority.indexOf('b10303') > -1) {
			var formWin = createWin('修改主管', 'managerform');
			formWin.down('form').loadRecord(record);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	deleteItems : function(button) {
		if (session.authority.indexOf('b10304') > -1) {
			var grid = button.up('grid');
			var action = 'realDelete';
			var funcId = 'f10304';
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
			funcId = 'f10302';
		} else {
			action = 'update';
			funcId = 'f10303';
		}
		var win = button.up('window');
		var grid = this.getManagerGrid();
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