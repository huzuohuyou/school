Ext.define('manage.controller.Pre_Courses_saler', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'pre_courses_salerGrid',
        selector: 'pre_courses_salergrid'
    },{
    	ref: 'detail_courses_salerGrid',
        selector: 'detail_courses_salergrid'
    }],
    views: ['pre_courses_saler.ViewForm'],
    init: function(app) {
        this.control({
			'pre_courses_salergrid button[action=query]' : {
				click : this.query
			},
            'detail_courses_salergrid actioncolumn[action=accept]': {
                click: this.update
            },
            'pre_courses_salergrid actioncolumn[action=addcourses]': {
                click: this.addcourses
            },
  
        });
    },
    update: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b31002') > -1) {
            //if ((record.data.isaccept == '1' && actionItem == 2) || (record.data.usable == '0' && actionItem == 3)) return;
         
        	var isaccept = record.data.isaccept == 0 ? '1': '0';
            var store = grid.getStore();
            var refresh = store.reload;
            var t_id = record.data.t_id;
            Ext.Msg.wait('处理中，请稍后...', '提示');
            var params = {
                action: 'updateclassStates',
                class_id: record.data.id,
                t_id :record.data.t_id,
                isaccept: isaccept,
                funcId: 'f31002'
            };
            ajax(null, params, null, refresh, store);
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }

    },
    addcourses: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b31011') > -1) {
        	var formWin = createWin('推荐课程列表', 'precourses_salerviewform');
        	var grid = formWin.down('grid');
        	formWin.down('form').form.findField('pre_courses_id').setValue(record.data.id);
        	var params = {
	              
	                pre_courses_id: record.data.id
	                };
           
	    	var store = grid.getStore();
            store.on("beforeload",
            function() {
                store.proxy.extraParams = params;
            });
            store.loadPage(1);

        }
        else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    query: function(button) {
        if (session.authority.indexOf('b31001') > -1) {
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