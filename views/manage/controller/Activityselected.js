Ext.define('manage.controller.Activityselected', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'activityselectedGrid',
        selector: 'activityselectedgrid'
    }],
    views: ['activityselected.Form','activityselected.ViewForm','activityselected.StateForm'],
    init: function(app) {
        this.control({
            'activityselectedgrid button[action=insert]': {
                click: this.add
            },
			'activityselectedgrid button[action=query]' : {
				click : this.query
			},
            'activityselectedgrid actioncolumn[action=edit]': {
                click: this.edit
            },
            'activityselectedgrid button[action=delete]': {
                click: this. deleteItems
            },
            'activityselectedform button[action=submit]': {
                click: this.submit
            },
            'activityStateform button[action=submit]': {
                click: this.submit
            },
            'activityselectedgrid actioncolumn[action=view]': {
                click: this.viewDetail
            }
            
        });
    },
    viewDetail : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b210405') > -1) {
			var formWin = createWin('查看备注', 'activityselectedviewform');
			formWin.down('form').loadRecord(record);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
    update: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b210404') > -1) {
            if ((record.data.usable == '1' && actionItem == 2) || (record.data.usable == '0' && actionItem == 3)) return;
            var usable = actionItem == 2 ? '1': '0';
            var store = grid.getStore();
            var refresh = store.reload;
            Ext.Msg.wait('处理中，请稍后...', '提示');
            var params = {
                action: 'update',
                id: record.data.id,
                usable: usable,
                funcId: 'f210104'
            };
            ajax(null, params, null, refresh, store);
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }

    },
    add: function(button) {
        if (session.authority.indexOf('b210402') > -1) createWin('添加活动', 'activityselectedform');
        else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    query: function(button) {
        if (session.authority.indexOf('b210401') > -1) {
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
        if (session.authority.indexOf('b210403') > -1) {
            var formWin = createWin('修改活动', 'activityStateform');
            formWin.down('form').loadRecord(record);
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    deleteItems: function(button) {
        if (session.authority.indexOf('b210404') > -1) {
            var grid = button.up('grid');
            var action = 'realDelete';
            var funcId = 'f210404';
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
            funcId = 'f210402';
        } else {
            action = 'update';
            funcId = 'f210403';
        }
        var win = button.up('window');
        var grid = this.getActivityselectedGrid();
        var freshfn = function() {
            win.close();
            grid.getStore().reload();
        };
        var params = {
            action: action,
            funcId: funcId,
          //  u_id: session.id
        };
        formSubmit(form, params, freshfn);
    }
});