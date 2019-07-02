Ext.define('manage.controller.Allocatedteacher', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'allocatedteacherGrid',
        selector: 'allocatedteachergrid'
    },
    {
		ref : 'listteacherGrid',
		selector : 'listteachergrid'
	},
    {
		ref : 'allocatedteacherViewForm',
		selector : 'allocatedteacherviewform'
	}],
    views: ['allocatedteacher.ViewForm'],
    init: function(app) {
        this.control({
			'allocatedteachergrid button[action=query]' : {
				click : this.query
			},
			'allocatedteachergrid actioncolumn[action=view]' : {
				click : this.viewDetail
			},
			'listteachergrid  button[action=delete]':{
				click : this.deleteItems
			}
        });
    },
    query: function(button) {
        if (session.authority.indexOf('b40501') > -1) {
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
	deleteItems : function(button) {
		if (session.authority.indexOf('b40504') > -1) {
			var grid = button.up('grid');
			var action = 'realDelete';
			var funcId = 'f40504';
			deleteteachersign(grid, action, funcId);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
    
	viewDetail : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b40505') > -1) {
			var formWin = createWin('查看教师授课情况', 'allocatedteacherviewform');
			var grid = formWin.down('grid');
		//	formWin.down('form').loadRecord(record);
			formWin.down('form').form.findField('number').setValue(record.data.number);
			var params = {
	                number: record.data.number,
	                week : record.data.week
	             
	                };
		
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

});