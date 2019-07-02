Ext.define('manage.controller.Jiaowu', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'jiaowuGrid',
		selector : 'jiaowugrid'
	} ],
	views : [ 'jiaowu.Grid', 'jiaowu.QueryForm', 'jiaowu.Form' ],
	init : function(app) {
		this.control({
			'jiaowugrid button[action=insert]' : {
				click : this.add
			},
			'jiaowugrid button[action=query]' : {
				click : this.query
			},
			'jiaowugrid button[action=delete]' : {
				click : this.deleteItems
			},
			'jiaowugrid actioncolumn[action=edit]' : {
				click : this.edit
			},
			'jiaowuform button[action=submit]' : {
				click : this.submit
			}
		});
	},
	add : function(button) {
		if (session.authority.indexOf('b70302') > -1)
	    {
			var formWin = createWin('添加教务人员', 'jiaowuform');
			 formWin.down('form').form.findField('role_id').setValue(30);
	    }
		else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	query : function(button) {
		if (session.authority.indexOf('b70301') > -1) {
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
		if (session.authority.indexOf('b70303') > -1) {
			var formWin = createWin('修改教务人员', 'jiaowuform');
			formWin.down('form').loadRecord(record);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	deleteItems : function(button) {
		if (session.authority.indexOf('b70304') > -1) {
			var grid = button.up('grid');
			var action = 'realDelete';
			var funcId = 'f70304';
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
			funcId = 'f70302';
		} else {
			action = 'update';
			funcId = 'f70303';
		}
		var win = button.up('window');
		var grid = this.getJiaowuGrid();
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