Ext.define('manage.controller.ChargerSign', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'chargerSignGrid',
        selector: 'chargerSigngrid'
    }],
    views: ['chargerSign.StateForm'],
    init: function(app) {
        this.control({
			'chargerSigngrid button[action=query]' : {
				click : this.query
			},
            'chargerSigngrid actioncolumn[action=chargerSign]': {
                click: this.chargerSign
            },
            'chargerSignStateform button[action=submit]': {
                click: this.submit
            },
        });
    },
    query: function(button) {
        if (session.authority.indexOf('b70201') > -1) {
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
   
    chargerSign: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b70203') > -1) {
            var formWin = createWin('驻校人员考勤', 'chargerSignStateform');
            formWin.down('form').form.findField('c_id').setValue(record.data.id);
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    submit: function(button) {
        var form = button.up('form').form;
        var action= 'addChargerSign';
        var funcId= 'f70203';
        var win = button.up('window');
        var grid = this.getChargerSignGrid();
        var freshfn = function() {
            win.close();
            grid.getStore().reload();
        };
        var params = {
            action: action,
            funcId: funcId
        };
        formSubmit(form, params, freshfn);
 }
    
});