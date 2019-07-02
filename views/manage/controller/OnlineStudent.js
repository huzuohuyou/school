Ext.define('manage.controller.OnlineStudent', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'onlinestudentGrid',
		selector : 'onlinestudentgrid'
	} ],
	views : [ 'onlinestudent.Grid', 'onlinestudent.QueryForm'],
	init : function(app) {
		this.control({
			'onlinestudentgrid button[action=query]' : {
				click : this.query
			}
		});
	},
	query : function(button) {
		if (session.authority.indexOf('b40701') > -1) {
			var grid = button.up('grid');
			var form = grid.up('panel').down('form');
			var params = form.getValues();
			var store = grid.getStore();
			store.on("beforeload", function() {
				store.proxy.extraParams = params;
			});
			store.loadPage(1);
			var studentstore = Ext.create('manage.store.onlinestudent.s_CountOnline');
			studentstore.load(function() {
				var records = studentstore.getRange(0, 1);
				for (var i = 0; i < records.length; i++) {
				    var record = records[i];
				    Ext.getCmp('sumstudent').setValue(record.data.sumstudent+" 人");
					Ext.getCmp('countstudent').setValue(record.data.countstudent+" 人");
					Ext.getCmp('s_chuqinlv').setValue((record.data.sumstudent / record.data.countstudent * 100).toFixed(2)+" %");
				}

				
			});
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	}
	
	
});