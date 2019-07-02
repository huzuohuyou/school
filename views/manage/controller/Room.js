Ext.define('manage.controller.Room', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'roomGrid',
		selector : 'roomgrid'
	} ],
	views : ['room.Form'],
	init : function(app) {
		this.control({
			'roomgrid button[action=insert]' : {
				click : this.add
			},
			'roomgrid button[action=query]' : {
				click : this.query
			},
			'roomgrid button[action=delete]' : {
				click : this.deleteItems
			},
			'roomgrid actioncolumn[action=edit]' : {
				click : this.edit
			},
			'roomform button[action=submit]' : {
				click : this.submit
			}
		});
	},
	add : function(button) {
		if (session.authority.indexOf('b30202') > -1)
			createWin('添加房间', 'roomform');
		else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	query : function(button) {
		if (session.authority.indexOf('b30201') > -1) {
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
		if (session.authority.indexOf('b20103') > -1) {
			var formWin = createWin('修改房间', 'roomform');
			formWin.down('form').loadRecord(record);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	deleteItems : function(button) {
		if (session.authority.indexOf('b20104') > -1) {
			var grid = button.up('grid');
			var action = 'realDelete';
			var funcId = 'f30204';
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
			funcId = 'f30202';
		} else {
			action = 'update';
			funcId = 'f30203';
		}
		var win = button.up('window');
		var grid = this.getRoomGrid();
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