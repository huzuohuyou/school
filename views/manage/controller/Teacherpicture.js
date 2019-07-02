Ext.define('manage.controller.Teacherpicture', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'teacherpictureGrid',
		selector : 'teacherpicturegrid'
	},{
		ref : 'pictureGrid',
		selector : 'picturegrid'
	},{
		ref : 'teacherpictureViewForm',
		selector : 'teacherpictureviewform'
	}],
	views : ['teacherpicture.Form','teacherpicture.ViewForm','teacherpicture.TeacherPictureViewForm'],
	init : function(app) {
		this.control({
			'teacherpicturegrid button[action=query]' : {
				click : this.query
			},
			'teacherpicturegrid actioncolumn[action=uploadPicture]' : {
				click : this.uploadPicture
			},
			'teacherpictureform button[action=submit]' : {
				click : this.submit
			},
			'picturegrid button[action=insert]' : {
				click : this.add
			},
			'picturegrid button[action=delete]' : {
				click : this.deleteItems
			},
			'picturegrid actioncolumn[action=view]' : {
				click : this.viewDetail
			},
			'picturegrid actioncolumn[action=edit]' : {
				click : this.edit
			}
		});
	},
	viewDetail : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b160105') > -1) {
			var formWin = createWin('查看图片信息', 'pictureviewform');
			formWin.down('form').loadRecord(record);
			Ext.getCmp('browseImage').getEl().dom.src = record.data.pic;
			formWin.down('panel[name=content]').update(record.data.content);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	uploadPicture : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b160102') > -1) {
			var formWin = createWin('上传图片列表', 'teacherpictureviewform');
			formWin.down('form').loadRecord(record);
			formWin.down('form').form.findField('ssd_id').setValue(record.data.id);
			var grid = formWin.down('grid');
			var ssd_id = record.data.id;
			var params = {
        			ssd_id:ssd_id
	                };
			var store = grid.getStore();
            store.on("beforeload",
            function() {
                store.proxy.extraParams = params;
            });
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	add : function(button) {
		if (session.authority.indexOf('b160103') > -1)
			{
			  var formWin =createWin('上传图片', 'teacherpictureform');
			  var ssd_id = this.getTeacherpictureViewForm().form.findField('ssd_id').getValue();
		      formWin.down('form').form.findField('ssd_id').setValue(ssd_id);
			}
		else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	query : function(button) {
		if (session.authority.indexOf('b130201') > -1) {
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
		if (session.authority.indexOf('b160106') > -1) {
			var formWin = createWin('修改图文', 'teacherpictureform');
			formWin.down('form').loadRecord(record);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	deleteItems : function(button) {
		if (session.authority.indexOf('b160104') > -1) {
			var grid = button.up('grid');
			var action = 'realDelete';
			var funcId = 'f160104';
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
			action = 'insertTeacherPicture';
			funcId = 'f160103';
		} else {
			action = 'update';
			funcId = 'f160106';
		}
		var win = button.up('window');
		var grid = this.getPictureGrid();
		var ssd_id = form.findField('ssd_id').getValue();
		var freshfn = function() {
			win.close();
			grid.getStore().reload();
		};
		var params = {
			action : action,
			funcId : funcId,
			t_id : session.id,
			ssd_id:ssd_id
		};
		formSubmit(form, params, freshfn);
	}
});