Ext.define('manage.controller.ClassSchool', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'classSchoolGrid',
        selector: 'classSchoolgrid'
    }],
    init: function(app) {
        this.control({
			'classSchoolgrid button[action=query]' : {
				click : this.query
			}
        });
    },
    query: function(button) {
        if (session.authority.indexOf('b31201') > -1) {
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
    }

});