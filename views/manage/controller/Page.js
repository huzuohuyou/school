Ext.define('manage.controller.Page', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'pageGrid',
		selector : 'pagegrid'
	} ],
	views : ['page.Form','page.ViewForm'],
	init : function(app) {
		this.control({
			'pagegrid button[action=insert]' : {
				click : this.add
			},
			'pagegrid button[action=query]' : {
				click : this.query
			},
			'pagegrid button[action=delete]' : {
				click : this.deleteItems
			},
			'pagegrid actioncolumn[action=edit]' : {
				click : this.edit
			},
			'pagegrid actioncolumn[action=view]' : {
				click : this.viewDetail
			},
			'pageform button[action=submit]' : {
				click : this.submit
			}
		});
	},
	viewDetail : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b20201') > -1) {
			var formWin = createWin('查看页面信息', 'pageviewform');
			formWin.down('form').loadRecord(record);
			formWin.down('panel[name=content]').update(record.data.content);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	add : function(button) {
		if (session.authority.indexOf('b20202') > -1)
			createWin('添加页面', 'pageform');
		else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	query : function(button) {
		if (session.authority.indexOf('b20201') > -1) {
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
			var formWin = createWin('修改页面', 'pageform');
			formWin.down('form').loadRecord(record);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	deleteItems : function(button) {
		if (session.authority.indexOf('b20104') > -1) {
			var grid = button.up('grid');
			var action = 'realDelete';
			var funcId = 'f20204';
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
			funcId = 'f20202';
		} else {
			action = 'update';
			funcId = 'f20203';
		}
		var win = button.up('window');
		var grid = this.getPageGrid();
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