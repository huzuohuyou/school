Ext.define('manage.controller.t_Attendance', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 't_attendanceGrid',
		selector : 't_attendancegrid'
	} ],
	views : [ 't_attendance.Grid', 't_attendance.QueryForm', 't_attendance.ViewForm'],
	init : function(app) {
		this.control({
			't_attendancegrid button[action=insert]' : {
				click : this.add
			},
			't_attendancegrid button[action=query]' : {
				click : this.query
			},
			't_attendancegrid button[action=delete]' : {
				click : this.deleteItems
			},
			't_attendancegrid actioncolumn[action=edit]' : {
				click : this.edit
			},
			't_attendancegrid actioncolumn[action=view]' : {
				click : this.viewDetail
			},
			't_attendanceform button[action=submit]' : {
				click : this.submit
			}
		});
	},
	viewDetail : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b40505') > -1) {
			var formWin = createWin('查看教师考勤', 't_attendanceviewform');
			formWin.down('form').loadRecord(record);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	add : function(button) {
		if (session.authority.indexOf('b40502') > -1)
			createWin('添加设备', 'deviceform');
		else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	query : function(button) {
		if (session.authority.indexOf('b40501') > -1) {
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
		if (session.authority.indexOf('b40503') > -1) {
			var formWin = createWin('修改设备', 'deviceform');
			formWin.down('form').loadRecord(record);
			
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	deleteItems : function(button) {
		if (session.authority.indexOf('b40504') > -1) {
			var grid = button.up('grid');
			var action = 'realDelete';
			var funcId = 'f40504';
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
			funcId = 'f40502';
		} else {
			action = 'update';
			funcId = 'f40503';
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