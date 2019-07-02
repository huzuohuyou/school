Ext.define('manage.controller.Activitysaler', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'activitysalerGrid',
        selector: 'activitysalergrid'
    }],
    views: ['activitysaler.Form','activitysaler.ViewForm'],
    init: function(app) {
        this.control({
            'activitysalergrid button[action=insert]': {
                click: this.add
            },
			'activitysalergrid button[action=query]' : {
				click : this.query
			},
            'activitysalergrid actioncolumn[action=edit]': {
                click: this.edit
            },
            'activitysalergrid button[action=delete]': {
                click: this. deleteItems
            },
            'activitysalerform button[action=submit]': {
                click: this.submit
            },
            'activitysalergrid actioncolumn[action=view]': {
                click: this.viewDetail
            }
            
        });
    },
    viewDetail : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b210505') > -1) {
			var formWin = createWin('查看备注', 'activitysalerviewform');
			formWin.down('form').loadRecord(record);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
    update: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b210504') > -1) {
            if ((record.data.usable == '1' && actionItem == 2) || (record.data.usable == '0' && actionItem == 3)) return;
            var usable = actionItem == 2 ? '1': '0';
            var store = grid.getStore();
            var refresh = store.reload;
            Ext.Msg.wait('处理中，请稍后...', '提示');
            var params = {
                action: 'update',
                id: record.data.id,
                usable: usable,
                funcId: 'f210504'
            };
            ajax(null, params, null, refresh, store);
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }

    },
    add: function(button) {
        if (session.authority.indexOf('b210502') > -1) createWin('添加活动', 'activitysalerform');
        else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    query: function(button) {
        if (session.authority.indexOf('b210501') > -1) {
        	
            var grid = button.up('grid');
            var form = grid.up('panel').down('form');
            var params = form.getValues();
        	form.form.findField('charger').setValue(record.data.id);
          
            var store = grid.getStore();
            store.on("beforeload",
            function() {
                store.proxy.extraParams = params;
            });
            store.loadPage(1);
            Ext.Msg.alert('dd');
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
   
    edit: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b210503') > -1) {
            var formWin = createWin('修改活动', 'activitysalerform');
            formWin.down('form').loadRecord(record);
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    deleteItems: function(button) {
        if (session.authority.indexOf('b210504') > -1) {
            var grid = button.up('grid');
            var action = 'realDelete';
            var funcId = 'f210504';
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
            funcId = 'f210502';
        } else {
            action = 'update';
            funcId = 'f210503';
        }
        var win = button.up('window');
        var grid = this.getActivitysalerGrid();
        var freshfn = function() {
            win.close();
            grid.getStore().reload();
        };
        var params = {
            action: action,
            funcId: funcId,
            charger: session.id
        };
        formSubmit(form, params, freshfn);
    }
});