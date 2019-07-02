Ext.define('manage.controller.ManagerEvaluateResult', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'managerEvaluateResultGrid',
        selector: 'managerEvaluateResultgrid'
    }],
    views: ['managerEvaluateResult.ViewForm'],
    init: function(app) {
        this.control({
            'managerEvaluateResultgrid actioncolumn[action=viewManagerEvaluate]': {
                click: this.viewManagerEvaluate
            }
        });
    },
    viewManagerEvaluate: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b210202') > -1) {
            var formWin = createWin('学生评价列表', 'managerEvaluateResultviewform');
            formWin.down('form').loadRecord(record);
			formWin.down('panel[name=content]').update(record.data.content);
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    }
});