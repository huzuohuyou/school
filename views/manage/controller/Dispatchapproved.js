Ext.define('manage.controller.Dispatchapproved', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'dispatchapprovedGrid',
        selector: 'dispatchapprovedgrid'
    }],
    views: ['dispatchapproved.ViewForm'],
    init: function(app) {
        this.control({
            'dispatchapprovedgrid actioncolumn[action=view]': {
                click: this.viewDetail
            },
            'dispatchapprovedgrid button[action=query]' : {
				click : this.query
			},
        });
    },
    query: function(button) {
        if (session.authority.indexOf('b190201') > -1) {
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
        if (session.authority.indexOf('b190203') > -1) {
            var formWin = createWin('查看调课申请', 'dispatchapprovedviewform');
            formWin.down('form').loadRecord(record);
            formWin.down('panel[name=reason]').update(record.data.reason);
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    }
});