Ext.define('manage.controller.QtActivity', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'qtGrid',
		selector : 'qtgrid'
	} ],
	views : ['qtactivity.Form'],
	init : function(app) {
		this.control({
			'qtgrid button[action=insert]' : {
				click : this.add
			},
			'qtgrid button[action=query]' : {
				click : this.query
			},
			'qtgrid button[action=delete]' : {
				click : this.deleteItems
			},
			'qtgrid actioncolumn[action=edit]' : {
				click : this.edit
			},
			'qtform button[action=submit]' : {
				click : this.submit
			}
		});
	},
	
	
	add : function(button) {
		if (session.authority.indexOf('b500302') > -1)
			createWin('添加其他活动', 'qtform');
		else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	query : function(button) {
		if (session.authority.indexOf('b500301') > -1) {
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
		if (session.authority.indexOf('b500303') > -1) {
			var formWin = createWin('修改其他活动', 'qtform');
			formWin.down('form').form.findField('f_nameLink').setValue(record.data.f_name);
			formWin.down('form').loadRecord(record);
			
			
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	deleteItems : function(button) {
		if (session.authority.indexOf('b500304') > -1) {
			var grid = button.up('grid');
			var action = 'realDelete';
			var funcId = 'f500304';
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
			funcId = 'f500302';
		} else {
			action = 'update';
			funcId = 'f500303';
		}
		var win = button.up('window');
		var grid = this.getQtGrid();
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