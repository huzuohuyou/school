Ext.define('manage.controller.Pre_Activity', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'pre_activityGrid',
        selector: 'pre_activitygrid'
    }],
    views: ['pre_activity.Form','pre_activity.ViewForm'],
    init: function(app) {
        this.control({
            'pre_activitygrid button[action=insert]': {
                click: this.add
            },
			'pre_activitygrid button[action=query]' : {
				click : this.query
			},
            'pre_activitygrid actioncolumn[action=edit]': {
                click: this.edit
            },
            'pre_activitygrid actioncolumn[action=addactivity]': {
                click: this.addactivity
            },
            'pre_activitygrid button[action=delete]': {
                click: this.deleteItems
            },
            'pre_activityform button[action=submit]': {
                click: this.submit
            }
        });
    },
    update: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b210204') > -1) {
            if ((record.data.isaccept == '1' && actionItem == 2) || (record.data.usable == '0' && actionItem == 3)) return;
            var isaccept = actionItem == 2 ? '1': '0';
            var store = grid.getStore();
            var refresh = store.reload;
            Ext.Msg.wait('处理中，请稍后...', '提示');
            var params = {
                action: 'update',
                id: record.data.id,
                isaccept: isaccept,
                funcId: 'f210204'
            };
            ajax(null, params, null, refresh, store);
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }

    },
    add: function(button) {
        if (session.authority.indexOf('b210202') > -1) createWin('添加活动', 'activityform');
        else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    addactivity: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b210211') > -1) {
        	var formWin = createWin('修改活动', 'preactivityviewform');
        	 var freshfn = function() {
        		 formWin.grid.getStore().reload();
             };
	    	var params = {
	                action: "queryByCondition",
	                funcId: "f30811",
	                pre_courses_id: record.data.id
	                };
            formSubmit(formWin, params, freshfn);
        	


        }
        else {
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
            var formWin = createWin('修改课程', 'preactivityviewform');
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
        var grid = this.getCoursesGrid();
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