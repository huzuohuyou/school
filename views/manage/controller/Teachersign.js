Ext.define('manage.controller.Teachersign', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'teachersignGrid',
		selector : 'teachersigngrid'
	},
	{
		ref : 'teachersignschoolGrid',
		selector : 'teachersignschoolgrid'
	}
	],
	views : [ 'teachersign.Grid','teachersign.StateForm','teachersign.ViewForm'],
	init : function(app) {
		this.control({
			'teachersignschoolgrid actioncolumn[action=sign]': {
	            click: this.sign
	        },
	        'teacherStateform button[action=submit]': {
                click: this.teachersign
            },
            'teachersigngrid actioncolumn[action=view]': {
                click: this.viewDetail
            }
		});
	},
	viewDetail : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b180102') > -1) {
			var name = record.data.name;
			var formWin = createWin('查看教师名单 :'+ name, 'teachersignviewform');
			var grid = formWin.down('grid');
			formWin.down('form').form.findField('s_id').setValue(record.data.id);
			var params = {
	                id: record.data.id
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
	 sign: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
	        if (session.authority.indexOf('b180103') > -1) {
	        	
	            var formWin = createWin('签到', 'teacherStateform');
	   //         formWin.down('form').loadRecord(record);
	            formWin.down('form').form.findField('ssd_id').setValue(record.data.id);
	            formWin.down('form').form.findField('c_id').setValue(record.data.c_id);
	            formWin.down('form').form.findField('teacher_id').setValue(record.data.teacher_id);
	            formWin.down('form').form.findField('status').setValue(record.data.status);
	            formWin.down('form').form.findField('week').setValue(record.data.week);
	            formWin.down('form').form.findField('temp_teacher_id').setValue(record.data.temp_teacher_id);
	            formWin.down('form').form.findField('temp_teacher_name').setValue(record.data.temp_teacher_name);
	        } else {
	            Ext.Msg.alert('系统提示', '您无权进行此项操作');
	        }
	  },
	 teachersign: function(button) {
	        var form = button.up('form').form;
	        var action= 'doTeacherSign';
	        var funcId= 'f180103';
	    	var ssd_id = form.findField('ssd_id').getValue();
	        var c_id = form.findField('c_id').getValue();
	        var status = form.findField('status').getValue();
	        var teacher_id = form.findField('teacher_id').getValue();
	        var week = form.findField('week').getValue();
	        var temp_teacher_id = form.findField('temp_teacher_id').getValue();
	        var temp_teacher_name = form.findField('temp_teacher_name').getValue();
	        var win = button.up('window');
	        var grid = this.getTeachersignschoolGrid();
	        var freshfn = function() {
	            win.close();
	            grid.getStore().reload();
	        };
	        var params = {
	            action: action,
	            funcId: funcId,
	            ssd_id:ssd_id,
	            c_id:c_id,
	            status:status,
	            teacher_id:teacher_id,
	            week:week,
	            temp_teacher_id:temp_teacher_id,
	            temp_teacher_name:temp_teacher_name,
	            u_id:session.id
	      
	        };
	        formSubmit(form, params, freshfn);
	 }
});