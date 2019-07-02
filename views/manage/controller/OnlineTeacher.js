Ext.define('manage.controller.OnlineTeacher', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'onlineteacherGrid',
		selector : 'onlineteachergrid'
	} ],
	views : [ 'onlineteacher.Grid', 'onlineteacher.QueryForm'],
	init : function(app) {
		this.control({
			'onlineteachergrid button[action=insert]' : {
				click : this.add
			},
			'onlineteachergrid button[action=query]' : {
				click : this.query
			},
			'onlineteachergrid button[action=delete]' : {
				click : this.deleteItems
			},
			'onlineteachergrid actioncolumn[action=edit]' : {
				click : this.edit
			},
			'onlineteachergrid actioncolumn[action=view]' : {
				click : this.viewDetail
			},
			'onlineteacherform button[action=submit]' : {
				click : this.submit
			}
		});
	},
	viewDetail : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b40605') > -1) {
			var formWin = createWin('查看教师考勤', 't_attendanceviewform');
			formWin.down('form').loadRecord(record);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	add : function(button) {
		if (session.authority.indexOf('b40602') > -1)
			createWin('添加设备', 'deviceform');
		else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	query : function(button) {
		if (session.authority.indexOf('b40601') > -1) {
			var grid = button.up('grid');
			var form = grid.up('panel').down('form');
			var params = form.getValues();
			var store = grid.getStore();
			store.on("beforeload", function() {
				store.proxy.extraParams = params;
			});
			store.loadPage(1);
			var teacherstore = Ext.create('manage.store.onlineteacher.t_CountOnline');
			teacherstore.load(function() {
				var records = teacherstore.getRange(0, 1);
				for (var i = 0; i < records.length; i++) {
				    var record = records[i];
				    Ext.getCmp('sumteacher').setValue(record.data.sumteacher+" 人");
					Ext.getCmp('countteacher').setValue(record.data.countteacher+" 人");
					Ext.getCmp('chuqinlv').setValue((record.data.sumteacher / record.data.countteacher * 100).toFixed(2)+" %");
				}

				
			});
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	edit : function(grid, rowIndex, colIndex, actionItem, event, record, row) {
		if (session.authority.indexOf('b40603') > -1) {
			var formWin = createWin('修改设备', 'deviceform');
			formWin.down('form').loadRecord(record);
			
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	deleteItems : function(button) {
		if (session.authority.indexOf('b40604') > -1) {
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
			funcId = 'f40602';
		} else {
			action = 'update';
			funcId = 'f40603';
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