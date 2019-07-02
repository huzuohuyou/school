Ext.define('manage.controller.YxActivity', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'yxGrid',
		selector : 'yxgrid'
	} ],
	views : ['yxactivity.Form','yxactivity.ViewForm'],
	init : function(app) {
		this.control({
			'yxgrid button[action=insert]' : {
				click : this.add
			},
			'yxgrid button[action=query]' : {
				click : this.query
			},
			'yxgrid button[action=delete]' : {
				click : this.deleteItems
			},
			'yxgrid actioncolumn[action=edit]' : {
				click : this.edit
			},
			'yxform button[action=submit]' : {
				click : this.submit
			}
		});
	},
	
	
	add : function(button) {
		if (session.authority.indexOf('b500102') > -1)
			createWin('添加研学活动', 'yxform');
		else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	query : function(button) {
		if (session.authority.indexOf('b500101') > -1) {
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
		if (session.authority.indexOf('b500103') > -1) {
			var formWin = createWin('修改研学活动', 'yxform');
			formWin.down('form').form.findField('f_nameLink').setValue(record.data.f_name);
			formWin.down('form').loadRecord(record);
			
			
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	deleteItems : function(button) {
		if (session.authority.indexOf('b500104') > -1) {
			var grid = button.up('grid');
			var action = 'realDelete';
			var funcId = 'f500104';
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
			funcId = 'f500102';
		} else {
			action = 'update';
			funcId = 'f500103';
		}
		var win = button.up('window');
		var grid = this.getYxGrid();
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