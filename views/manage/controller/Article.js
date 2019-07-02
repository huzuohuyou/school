Ext.define('manage.controller.Article', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'articleGrid',
		selector : 'articlegrid'
	} ],
	views : ['article.Form','article.ViewForm'],
	init : function(app) {
		this.control({
			'articlegrid button[action=insert]' : {
				click : this.add
			},
			'articlegrid button[action=query]' : {
				click : this.query
			},
			'articlegrid button[action=delete]' : {
				click : this.deleteItems
			},
			'articlegrid actioncolumn[action=edit]' : {
				click : this.edit
			},
			'articlegrid actioncolumn[action=view]' : {
				click : this.viewDetail
			},
			'articleform button[action=submit]' : {
				click : this.submit
			}
		});
	},
	viewDetail : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b20305') > -1) {
			var formWin = createWin('查看文章信息', 'articleviewform');
			formWin.down('form').loadRecord(record);
			formWin.down('panel[name=content]').update(record.data.content);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	add : function(button) {
		if (session.authority.indexOf('b20302') > -1)
			createWin('添加文章', 'articleform');
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
		if (session.authority.indexOf('b20303') > -1) {
			var formWin = createWin('修改文章', 'articleform');
			formWin.down('form').loadRecord(record);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	deleteItems : function(button) {
		if (session.authority.indexOf('b20304') > -1) {
			var grid = button.up('grid');
			var action = 'realDelete';
			var funcId = 'f20304';
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
			funcId = 'f20302';
		} else {
			action = 'update';
			funcId = 'f20303';
		}
		var win = button.up('window');
		var grid = this.getArticleGrid();
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