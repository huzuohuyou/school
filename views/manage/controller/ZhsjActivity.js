Ext.define('manage.controller.ZhsjActivity', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'zhsjGrid',
		selector : 'zhsjgrid'
	} ],
	views : ['zhsjactivity.Form'],
	init : function(app) {
		this.control({
			'zhsjgrid button[action=insert]' : {
				click : this.add
			},
			'zhsjgrid button[action=query]' : {
				click : this.query
			},
			'zhsjgrid button[action=delete]' : {
				click : this.deleteItems
			},
			'zhsjgrid actioncolumn[action=edit]' : {
				click : this.edit
			},
			'zhsjform button[action=submit]' : {
				click : this.submit
			}
		});
	},
	
	
	add : function(button) {
		if (session.authority.indexOf('b500202') > -1)
			createWin('添加综合实践活动', 'zhsjform');
		else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	query : function(button) {
		if (session.authority.indexOf('b500201') > -1) {
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
		if (session.authority.indexOf('b500203') > -1) {
			var formWin = createWin('修改综合实践活动', 'zhsjform');
			formWin.down('form').form.findField('f_nameLink').setValue(record.data.f_name);
			formWin.down('form').loadRecord(record);
			
			
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	deleteItems : function(button) {
		if (session.authority.indexOf('b500204') > -1) {
			var grid = button.up('grid');
			var action = 'realDelete';
			var funcId = 'f500204';
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
			funcId = 'f500202';
		} else {
			action = 'update';
			funcId = 'f500203';
		}
		var win = button.up('window');
		var grid = this.getZhsjGrid();
		var freshfn = function() {
			win.close();
			grid.getStore().reload();
		};
		
		var params = {
			action : action,
			funcId : funcId,
			u_id : session.id
		};
		formSubmit(form, params, freshfn);
	}
});