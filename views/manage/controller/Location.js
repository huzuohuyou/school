Ext.define('manage.controller.Location', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'locationGrid',
		selector : 'locationgrid'
	} ],
	views : [ 'location.Grid', 'location.QueryForm', 'location.ViewForm'],
	init : function(app) {
		this.control({
			'locationgrid button[action=query]' : {
				click : this.query
			},
			'locationgrid actioncolumn[action=view]' : {
				click : this.viewDetail
			}
		});
	},
	viewDetail : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		var formWin = createWin('查看路线信息', 'locationviewform');
		formWin.down('form').loadRecord(record);
		formWin.down('panel[name=content]').update(record.data.content);
	},
	query : function(button) {
			if (session.authority.indexOf('b40401') > -1) {
				query(button);
			} else {
				Ext.Msg.alert('系统提示', '您无权进行此项操作');
			}
	}
});