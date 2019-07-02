Ext.define('manage.controller.Teachersummary', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'teachersummaryGrid',
		selector : 'teachersummarygrid'
	}],
	views : ['teachersummary.Form','teachersummary.ViewForm'],
	init : function(app) {
		this.control({
			'teachersummaryform button[action=submit]' : {
				click : this.submit
			},
			'teachersummarygrid button[action=insert]' : {
				click : this.add
			},
			'teachersummarygrid button[action=delete]' : {
				click : this.deleteItems
			},
			'teachersummarygrid actioncolumn[action=view]' : {
				click : this.viewDetail
			},
			'teachersummarygrid actioncolumn[action=edit]' : {
				click : this.edit
			}
		});
	},
	viewDetail : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b160305') > -1) {
			var formWin = createWin('查看图片信息', 'teachersummaryviewform');
			formWin.down('form').loadRecord(record);
			formWin.down('panel[name=content]').update(record.data.content);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	add : function(button) {
		if (session.authority.indexOf('b160302') > -1)
			{
			  createWin('期末总结', 'teachersummaryform');
			}
		else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	edit : function(grid, rowIndex, colIndex, actionItem, event, record, row) {
		if (session.authority.indexOf('b160303') > -1) {
			var formWin = createWin('修改教案', 'teachersummaryform');
			formWin.down('form').loadRecord(record);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	deleteItems : function(button) {
		if (session.authority.indexOf('b160304') > -1) {
			var grid = button.up('grid');
			var action = 'realDelete';
			var funcId = 'f160304';
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
			action = 'insertTeacherSummary';
			funcId = 'f160302';
		} else {
			action = 'update';
			funcId = 'f160303';
		}
		var win = button.up('window');
		var grid = this.getTeachersummaryGrid();
		var freshfn = function() {
			win.close();
			grid.getStore().reload();
		};
		var params = {
			action : action,
			funcId : funcId,
			t_id : session.id
		};
		formSubmit(form, params, freshfn);
	}
});