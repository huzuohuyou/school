Ext.define('manage.controller.Picture', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'pictureGrid',
		selector : 'picturegrid'
	} ],
	views : ['picture.Form','picture.ViewForm'],
	init : function(app) {
		this.control({
			'picturegrid button[action=insert]' : {
				click : this.add
			},
			'picturegrid button[action=query]' : {
				click : this.query
			},
			'picturegrid button[action=delete]' : {
				click : this.deleteItems
			},
			'picturegrid actioncolumn[action=edit]' : {
				click : this.edit
			},
			'picturegrid actioncolumn[action=yes]' : {
				click : this.yes
			},
			'picturegrid actioncolumn[action=view]' : {
				click : this.viewDetail
			},
			'pictureform button[action=submit]' : {
				click : this.submit
			}
		});
	},
	yes : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b20403') > -1) {
            var stickie = record.data.stickie == '1' ? '0': '1';
            var store = grid.getStore();
            var refresh = store.reload;
            Ext.Msg.wait('处理中，请稍后...', '提示');
            var params = {
                action: 'update',
                id: record.data.id,
                c_id: record.data.c_id,
                title: record.data.title,
                content: record.data.content,
                u_id: record.data.u_id,
                pic: record.data.pic,
                outURL: record.data.outURL,
                stickie: stickie,
                funcId: 'f20403'
            };
            ajax(null, params, null, refresh, store);
            
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},

	viewDetail : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b20405') > -1) {
			var formWin = createWin('查看图文信息', 'pictureviewform');
			formWin.down('form').loadRecord(record);
			Ext.getCmp('browseImage').getEl().dom.src = record.data.pic;
			formWin.down('panel[name=content]').update(record.data.content);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	add : function(button) {
		if (session.authority.indexOf('b20402') > -1)
			createWin('添加图文', 'pictureform');
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
		if (session.authority.indexOf('b20403') > -1) {
			var formWin = createWin('修改图文', 'pictureform');
			formWin.down('form').loadRecord(record);
			if(formWin.down('form').form.findField('stickie').getValue()==1)
				{
				  formWin.down('form').form.findField('stickie_a').setValue(true);
				}
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	deleteItems : function(button) {
		if (session.authority.indexOf('b20404') > -1) {
			var grid = button.up('grid');
			var action = 'realDelete';
			var funcId = 'f20404';
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
			funcId = 'f20402';
		} else {
			action = 'update';
			funcId = 'f20403';
		}
		var win = button.up('window');
		var grid = this.getPictureGrid();
		var freshfn = function() {
			win.close();
			grid.getStore().reload();
		};
		var check = form.findField("stickie_a").getValue();
		if(check)
			{
			  form.findField("stickie").setValue(1);
			}
		else
			{
			  form.findField("stickie").setValue(0);
			}
		var params = {
			action : action,
			funcId : funcId,
			u_id : session.id
		};
		formSubmit(form, params, freshfn);
	}
});