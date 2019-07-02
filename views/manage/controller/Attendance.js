Ext.define('manage.controller.Attendance', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'attendanceGrid',
		selector : 'attendancegrid'
	} ],
	views : [ 'attendance.Grid', 'attendance.QueryForm', 'attendance.ViewForm'],
	init : function(app) {
		this.control({
			'devicegrid button[action=insert]' : {
				click : this.add
			},
			'devicegrid button[action=query]' : {
				click : this.query
			},
			'devicegrid button[action=delete]' : {
				click : this.deleteItems
			},
			'devicegrid actioncolumn[action=edit]' : {
				click : this.edit
			},
			'devicegrid actioncolumn[action=view]' : {
				click : this.viewDetail
			},
			'deviceform button[action=submit]' : {
				click : this.submit
			}
		});
	},
	viewDetail : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b40305') > -1) {
			var formWin = createWin('查看考勤信息', 'attendanceviewform');
			formWin.down('form').loadRecord(record);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	add : function(button) {
		if (session.authority.indexOf('b40302') > -1)
			createWin('添加设备', 'deviceform');
		else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	query : function(button) {
		if (session.authority.indexOf('b40301') > -1) {
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
		if (session.authority.indexOf('b40303') > -1) {
			var formWin = createWin('修改设备', 'deviceform');
			formWin.down('form').loadRecord(record);
			
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	deleteItems : function(button) {
		if (session.authority.indexOf('b40304') > -1) {
			var grid = button.up('grid');
			var action = 'realDelete';
			var funcId = 'f40304';
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
			funcId = 'f40302';
		} else {
			action = 'update';
			funcId = 'f40303';
		}
		var win = button.up('window');
		var grid = this.getDeviceGrid();//this.getRoleGrid();
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