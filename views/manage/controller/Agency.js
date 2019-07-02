Ext.define('manage.controller.Agency', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'agencyGrid',
        selector: 'agencygrid'
    },
    {
        ref: 'agencyQueryForm',
        selector: 'agencyqueryform'
    }],
    views: ['agency.Form'],
    init: function(app) {
        this.control({
            'agencygrid button[action=insert]': {
                click: this.add
            },
			'agencygrid button[action=query]' : {
				click : this.query
			},
            'agencygrid actioncolumn[action=edit]': {
                click: this.edit
            },
            'agencygrid button[action=delete]': {
                click: this.deleteItems
            },
            'agencyform button[action=submit]': {
                click: this.submit
            }
        });
    },
    add: function(button) {
        if (session.authority.indexOf('b40202') > -1) createWin('添加机构', 'agencyform');
        else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    query: function(button) {
        if (session.authority.indexOf('b40201') > -1) {
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
        if (session.authority.indexOf('b40203') > -1) {
            var formWin = createWin('修改机构信息', 'agencyform');
            formWin.down('form').loadRecord(record);
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    deleteItems: function(button) {
        if (session.authority.indexOf('b40204') > -1) {
            var grid = button.up('grid');
            var action = 'realDelete';
            var funcId = 'f40204';
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
            funcId = 'f40202';
        } else {
            action = 'update';
            funcId = 'f40203';
        }
        var win = button.up('window');
        var grid = this.getAgencyGrid();
        var freshfn = function() {
            win.close();
            grid.getStore().reload();
        };
        var params = {
            action: action,
            funcId: funcId,
        };
        formSubmit(form, params, freshfn);
    }
});