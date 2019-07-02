Ext.define('manage.controller.Mysign', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'mysignGrid',
        selector: 'mysigngrid'
    }],
    init: function(app) {
        this.control({
			'mysigngrid button[action=query]' : {
				click : this.query
			},
            'mysigngrid button[action=delete]': {
                click: this.deleteItems
            }
        });
    },
    query: function(button) {
        if (session.authority.indexOf('b80601') > -1) {
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
    deleteItems: function(button) {
        if (session.authority.indexOf('b80604') > -1) {
            var grid = button.up('grid');
            var action = 'realDelete';
            var funcId = 'f80604';
            deleteItems(grid, action, funcId);
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    }

});