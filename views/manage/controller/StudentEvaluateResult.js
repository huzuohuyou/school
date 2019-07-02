Ext.define('manage.controller.StudentEvaluateResult', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'studentEvaluateResultGrid',
        selector: 'studentEvaluateResultgrid'
    },{
        ref: 'evaluateresultGrid',
        selector: 'evaluateresultgrid'
    }],
    views: ['studentEvaluateResult.EvaluateViewForm','studentEvaluateResult.ViewForm'],
    init: function(app) {
        this.control({
            'studentEvaluateResultgrid actioncolumn[action=studentList]': {
                click: this.studentList
            },
            'evaluateresultgrid actioncolumn[action=viewResult]': {
                click: this.viewResult
            }
        });
    },
    studentList: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b210102') > -1) {
            var formWin = createWin('学生评价列表', 'studentEvaluateResultviewform');
            var grid = formWin.down('grid');
            var params = {
        			  ssd_id: record.data.id,
  	                };
              
  	    	var store = grid.getStore();
              store.on("beforeload",
              function() {
                  store.proxy.extraParams = params;
              });
              store.load();
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    viewResult: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b210103') > -1) {
            var formWin = createWin('查看评价详情', 'evaluateresultviewform');
            formWin.down('form').loadRecord(record);
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    }
});