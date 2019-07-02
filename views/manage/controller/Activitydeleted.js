Ext.define('manage.controller.Activitydeleted', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'ActivitydeletedGrid',
        selector: 'activitydeletedgrid'
    }],
    views: ['activitydeleted.ViewForm'],
    init: function(app) {
        this.control({
			'activitydeletedgrid button[action=query]' : {
				click : this.query
			},
            'activitydeletedgrid button[action=delete]': {
                click: this.deleteItems
            },
            'activitydeletedgrid actioncolumn[action=view]': {
                click: this.viewDetail
            }
            
        });
    },
    viewDetail : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b210305') > -1) {
			var formWin = createWin('查看备注', 'activitydeletedviewform');
			formWin.down('form').loadRecord(record);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
    query: function(button) {
        if (session.authority.indexOf('b210301') > -1) {
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
        if (session.authority.indexOf('b210304') > -1) {
            var grid = button.up('grid');
            var action = 'realDelete';
            var funcId = 'f210304';
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
            funcId = 'f210302';
        } else {
            action = 'update';
            funcId = 'f210303';
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
            u_id: session.id
        };
        formSubmit(form, params, freshfn);
    }
});