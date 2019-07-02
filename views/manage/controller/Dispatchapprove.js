Ext.define('manage.controller.Dispatchapprove', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'dispatchapproveGrid',
        selector: 'dispatchapprovegrid'
    }],
    views: ['dispatchapprove.ViewForm'],
    init: function(app) {
        this.control({
			'dispatchapprovegrid button[action=query]' : {
				click : this.query
			},
            'dispatchapprovegrid actioncolumn[action=view]': {
                click: this.viewDetail
            },
            'dispatchapprovegrid' : {
				edit : this.edit
			},
			'dispatchapproveviewform button[action=submit]' : {
				click : this.submit
			}
        });
    },
    query: function(button) {
        if (session.authority.indexOf('b190101') > -1) {
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
    submit : function(button) {
		var form = button.up('form').form;
		var action = 'update';
		var funcId = 'f190104';
		var win = button.up('window');
		var grid = this.getDispatchapproveGrid();
		var id = form.findField('id').getValue();
		var freshfn = function() {
			win.close();
			grid.getStore().reload();
		};
		var params = {
			action : action,
			funcId : funcId,
			id :id
		};
		formSubmit(form, params, freshfn);
	},
    edit : function( editor, context, eOpts ) {
		if (session.authority.indexOf('b190104') > -1) {
			Ext.Msg.wait('正在修改，请稍后...', '提示');
			var params = {
				action : 'update',
				funcId : 'f190104',
				id : context.record.get('cd_id'),
				dispatch_status : context.record.get('dispatch_status')
			};
			var grid = this.getDispatchapproveGrid();
			var freshfn = function() {
				grid.getStore().reload();
			};
			ajax(null,params,null,freshfn)
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
    viewDetail: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b190103') > -1) {
            var formWin = createWin('查看串课申请', 'dispatchapproveviewform');
            formWin.down('form').loadRecord(record);
            formWin.down('panel[name=reason]').update(record.data.reason);
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    }
});