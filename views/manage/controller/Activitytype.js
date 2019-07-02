Ext.define('manage.controller.Activitytype', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'activitytypeGrid',
		selector : 'activitytypegrid'
	} ],
	views : ['activitytype.Form'],
	init : function(app) {
		this.control({
			'activitytypegrid button[action=insert]' : {
				click : this.add
			},
			'activitytypegrid button[action=query]' : {
				click : this.query
			},
			'activitytypegrid button[action=delete]' : {
				click : this.deleteItems
			},
			'activitytypegrid actioncolumn[action=edit]' : {
				click : this.edit
			},
			'activitytypeform button[action=submit]' : {
				click : this.submit
			}
		});
	},
		
	add : function(button) {
		if (session.authority.indexOf('b500402') > -1)
			createWin('添加活动类别', 'activitytypeform');
		else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	query : function(button) {
		if (session.authority.indexOf('b500401') > -1) {
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
		if (session.authority.indexOf('b500403') > -1) {
			var formWin = createWin('修改活动类型', 'activitytypeform');
			formWin.down('form').loadRecord(record);	
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	deleteItems : function(button) {
		if (session.authority.indexOf('b500404') > -1) {
			var grid = button.up('grid');
			var action = 'realDelete';
			var funcId = 'f500404';
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
			funcId = 'f500402';
		} else {
			action = 'update';
			funcId = 'f500403';
		}
		var win = button.up('window');
		var grid = this.getActivitytypeGrid();
		var freshfn = function() {
			win.close();
			grid.getStore().reload();
		};
		var params = {
			action : action,
			funcId : funcId,
		};
		formSubmit(form, params, freshfn);
	}
});