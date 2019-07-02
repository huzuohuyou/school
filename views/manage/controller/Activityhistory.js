Ext.define('manage.controller.Activityhistory', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'ActivityhistoryGrid',
        selector: 'activityhistorygrid'
    }],
    views: ['activityhistory.ViewForm'],
    init: function(app) {
        this.control({
            'activityhistorygrid button[action=insert]': {
                click: this.add
            },
			'activityhistorygrid button[action=query]' : {
				click : this.query
			},
            'activityhistorygrid actioncolumn[action=edit]': {
                click: this.edit
            },
            'activityhistorygrid button[action=delete]': {
                click: this.deleteItems
            },
            'activityhistorygrid actioncolumn[action=view]': {
                click: this.viewDetail
            }
            
        });
    },
    viewDetail : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b210205') > -1) {
			var formWin = createWin('查看备注', 'activityhistoryviewform');
			formWin.down('form').loadRecord(record);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
    update: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b210204') > -1) {
            if ((record.data.usable == '1' && actionItem == 2) || (record.data.usable == '0' && actionItem == 3)) return;
            var usable = actionItem == 2 ? '1': '0';
            var store = grid.getStore();
            var refresh = store.reload;
            Ext.Msg.wait('处理中，请稍后...', '提示');
            var params = {
                action: 'update',
                id: record.data.id,
                usable: usable,
                funcId: 'f210204'
            };
            ajax(null, params, null, refresh, store);
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }

    },
    query: function(button) {
        if (session.authority.indexOf('b210201') > -1) {
            var grid = button.up('grid');
            var form = grid.up('panel').down('form');
            var params = form.getValues();
            var store = grid.getStore();
            store.on("beforeload",
            function() {
                store.proxy.extraParams = params;
            });
            store.loadPage(1);
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    edit: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b210203') > -1) {
            var formWin = createWin('修改活动', 'activityselectedform');
            formWin.down('form').loadRecord(record);
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    deleteItems: function(button) {
        if (session.authority.indexOf('b210204') > -1) {
            var grid = button.up('grid');
            var action = 'realDelete';
            var funcId = 'f210204';
            deleteItems(grid, action, funcId);
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    submit: function(button) {
        var form = button.up('form').form;
        var action;
        var funcId;
        if (form.findField('id').getValue() == "") {
            action = 'insert';
            funcId = 'f210202';
        } else {
            action = 'update';
            funcId = 'f210203';
        }
        var win = button.up('window');
        var grid = this.getActivityhistoryGrid();
        var freshfn = function() {
            win.close();
            grid.getStore().reload();
        };
        var params = {
            action: action,
            funcId: funcId,
            u_id: session.id
        };
        formSubmit(form, params, freshfn);
    }
});