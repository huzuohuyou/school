Ext.define('manage.controller.Coursedispatch', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'coursedispatchGrid',
        selector: 'coursedispatchgrid'
    }],
    views: ['coursedispatch.Form','coursedispatch.ViewForm'],
    init: function(app) {
        this.control({
            'coursedispatchgrid button[action=insert]': {
                click: this.add
            },
			'coursedispatchgrid button[action=query]' : {
				click : this.query
			},
            'coursedispatchgrid actioncolumn[action=view]': {
                click: this.viewDetail
            },
            'coursedispatchform button[action=submit]': {
                click: this.submit
            }
        });
    },
    add: function(button) {
        if (session.authority.indexOf('b120202') > -1)
        	createWin('添加串课申请', 'coursedispatchform');
        else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    query: function(button) {
        if (session.authority.indexOf('b120201') > -1) {
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
    viewDetail: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b120203') > -1) {
            var formWin = createWin('查看串课申请', 'coursedispatchviewform');
            formWin.down('form').loadRecord(record);
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    submit: function(button) {
        var form = button.up('form').form;
        var action;
        var funcId;
        if (form.findField('id').getValue() == "") {
            action = 'addCourseDispatch';
            funcId = 'f120202';
        } else {
            action = 'updateCharger';
            funcId = 'f70103';
        }
        var win = button.up('window');
        var grid = this.getCoursedispatchGrid();
      //  var worktime = form.findField('worktime').getValue();
        var freshfn = function() {
            win.close();
            grid.getStore().reload();
        };
        var params = {
            action: action,
            funcId: funcId,
         //  worktime:worktime,
            u_id: session.id
        };
        formSubmit(form, params, freshfn);
    }
});