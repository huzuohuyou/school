Ext.define('manage.controller.Class', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'classGrid',
		selector : 'classgrid'
	} ],
	views : [ 'class.Form', 'class.GradeForm' ],
	init : function(app) {
		this.control({
			'classgrid actioncolumn[action=insert]' : {
				click : this.addNextLevel
			},
			'classgrid actioncolumn[action=edit]' : {
				click : this.edit
			},
			'classgrid actioncolumn[action=yes]' : {
				click : this.update
			},
			'classgrid actioncolumn[action=no]' : {
				click : this.update
			},
			'classform button[action=submit]' : {
				click : this.submit
			},
			'gradeform button[action=submit]' : {
				click : this.submit
			}
		});
	},
	addNextLevel : function(grid, rowIndex, colIndex, actionItem, event,
			record, row) {
		if (session.authority.indexOf('b30301') > -1) {
			if (record.data.level == 1) {
				var win = createWin('添加年级信息', 'gradeform');
				win.down('form').form.findField('p_id')
						.setValue(record.data.id);
				win.down('form').form.findField('level').setValue(2);
				win.down('form').form.findField('leaf').setValue(0);
				win.down('form').form.findField('path').setValue(
						record.data.path);
			} else if (record.data.level == 2) {
				var win = createWin('添加班级信息', 'classform');
				win.down('form').form.findField('p_id')
						.setValue(record.data.id);
				win.down('form').form.findField('level').setValue(3);
				win.down('form').form.findField('leaf').setValue(1);
				win.down('form').form.findField('path').setValue(
						record.data.path);
			}
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	update: function(c, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b30303') > -1) {
		    if ((record.data.del_flag == 1 && actionItem == 4) || (record.data.del_flag == 0 && actionItem == 5)) return;
		    var del_flag = actionItem == 4 ? 1 : 0;
		    var grid = this.getClassGrid();
		    var refresh = function(){
		    	var r = grid.getStore().getNodeById(record.data.p_id);
				grid.getStore().load({
					node : r
				});
			};
		    Ext.Msg.wait('处理中，请稍后...', '提示');
		    var params = {
		        action: 'update',
		        id: record.data.id,
		        del_flag: del_flag,
		        funcId: 'f30303'
		    };
		    ajax(null, params, null, refresh);
		} else {
		    Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	edit : function(grid, rowIndex, colIndex, actionItem, event, record, row) {
		console.log(123);
		if (session.authority.indexOf('b30302') > -1) {
			if (record.data.level == 2) {
				var formWin = createWin('修改年级信息', 'gradeform');
				formWin.down('form').loadRecord(record);
			} else if (record.data.level == 3) {
				var formWin = createWin('修改班级信息', 'classform');
				formWin.down('form').loadRecord(record);
			}
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	submit : function(button) {
		var form = button.up('form').form;
		var action;
		var funcId;
		var id = new Date().Format("CyyyyMMddhhmmssS");
		if (form.findField('id').getValue() == "") {
			form.findField('id').setValue(id);
			action = 'insert';
			funcId = 'f30301';
		} else {
			action = 'update';
			funcId = 'f30302';
		}
		var path = form.findField('path').getValue() + "/" + id;
		form.findField('path').setValue(path);
		var win = button.up('window');
		var grid = this.getClassGrid();
		var node = form.findField('p_id').getValue();
		var freshfn = function() {
			win.close();
			var record = grid.getStore().getNodeById(node);
			grid.getStore().load({
				node : record
			});
		};
		var params = {
			action : action,
			funcId : funcId
		};
		formSubmit(form, params, freshfn);
	}
});