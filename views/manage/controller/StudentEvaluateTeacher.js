Ext.define('manage.controller.StudentEvaluateTeacher', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'studentEvaluateTeacherGrid',
        selector: 'studentEvaluateTeachergrid'
    }],
    views: ['studentEvaluateTeacher.Form','studentEvaluateTeacher.ViewForm'],
    init: function(app) {
        this.control({
            'studentEvaluateTeachergrid actioncolumn[action=evaluate]': {
                click: this.evaluate
            },
            'studentEvaluateTeachergrid actioncolumn[action=viewEvaluate]': {
                click: this.viewEvaluate
            },
            'studentEvaluateTeacherform button[action=submit]' : {
				click : this.submit
			},
        });
    },
    evaluate: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b200102') > -1) {
        	if(record.data.evaluate_status == 0){
            var formWin = createWin('填写教师评价', 'studentEvaluateTeacherform');
            formWin.down('form').form.findField('c_id').setValue(record.data.c_id);
            formWin.down('form').form.findField('ssd_id').setValue(record.data.ssd_id);
            formWin.down('form').form.findField('t_id').setValue(record.data.teacher_id);
        	}
        else{
        	Ext.Msg.alert('系统提示', '您已评价过该教师，不能重复评价！');
            }
        } else {
            Ext.Msg.alert('系统提示', '您无权进行此项操作');
        }
    },
    viewEvaluate: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
        if (session.authority.indexOf('b200103') > -1) {
            var formWin = createWin('查看教师评价结果', 'studentEvaluateTeacherviewform');
            var grid = formWin.down('grid');
            var params = {
      			  ssd_id: record.data.ssd_id,
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
    submit: function(button) {
        var form = button.up('form').form;
        var action;
        var funcId;
        if (form.findField('id').getValue() == "") {
            action = 'insertStudentEvaluateTeacher';
            funcId = 'f200102';
        } else {
            action = 'updateSchool';
            funcId = 'f200103';
        }
        var win = button.up('window');
        var grid = this.getStudentEvaluateTeacherGrid();
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