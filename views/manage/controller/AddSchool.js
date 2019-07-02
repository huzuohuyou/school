Ext.define('manage.controller.AddSchool', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'addschoolGrid',
        selector: 'addschoolgrid'
    },
    {
        ref: 'addschoolQueryForm',
        selector: 'addschoolqueryform'
    }],
    views: ['addSchool.Form','addSchool.ViewForm','addSchool.TestForm'],
    init: function(app) {
        this.control({
            'addschoolgrid button[action=insert]': {
                click: this.add
            },
			'addschoolgrid button[action=query]' : {
				click : this.query
			},
            'addschoolgrid actioncolumn[action=edit]': {
                click: this.edit
            },
            'addschoolgrid actioncolumn[action=view]': {
                click: this.viewDetail
            },
            'addschoolgrid button[action=delete]': {
                click: this.deleteItems
            },
            'addschoolform button[action=submit]': {
                click: this.submit
            }
        });
    },
    viewDetail : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b130205') > -1) {
			var formWin = createWin('查看备注', 'addschoolviewform');
			formWin.down('form').loadRecord(record);
			formWin.down('panel[name=remark]').update(record.data.remark);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
    update: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b130204') > -1) {
            if ((record.data.usable == '1' && actionItem == 2) || (record.data.usable == '0' && actionItem == 3)) return;
            var usable = actionItem == 2 ? '1': '0';
            var store = grid.getStore();
            var refresh = store.reload;
            Ext.Msg.wait('处理中，请稍后...', '提示');
            var params = {
                action: 'update',
                id: record.data.id,
                usable: usable,
                funcId: 'f200104'
            };
            ajax(null, params, null, refresh, store);
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }

    },
    add: function(button) {
        if (session.authority.indexOf('b130202') > -1) createWin('添加学校', 'addschoolform');
        else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    query: function(button) {
        if (session.authority.indexOf('b130201') > -1) {
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
        if (session.authority.indexOf('b130203') > -1) {
            var formWin = createWin('修改学校', 'addschoolform');
            formWin.down('form').loadRecord(record);
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    deleteItems: function(button) {
        if (session.authority.indexOf('b130204') > -1) {
            var grid = button.up('grid');
            var action = 'realDelete';
            var funcId = 'f130204';
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
            action = 'insertSchool';
            funcId = 'f130202';
        } else {
            action = 'update';
            funcId = 'f130203';
        }
        var win = button.up('window');
        var grid = this.getAddschoolGrid();
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