Ext.define('manage.controller.TeacherAttendanceManagent', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'teacherAttendanceManagentGrid',
		selector : 'teacherAttendanceManagentgrid'
	}
	],
	views : [ 'teacherAttendanceManagent.Grid','teacherAttendanceManagent.ViewForm'],
	init : function(app) {
		this.control({
			'teacherAttendanceManagentgrid actioncolumn[action=viewdetail]': {
	            click: this.viewDetail
	        }
		});
	},
	viewDetail : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b230102') > -1) {
			var formWin = createWin('查看出勤详情', 'teacherAttendanceManagentviewform');
			var grid = formWin.down('grid');
			formWin.down('form').form.findField('ssd_id').setValue(record.data.ssd_id);
        	formWin.down('form').form.findField('t_id').setValue(record.data.teacher_id);
        	var params = {
      			  ssd_id: record.data.id,
      			  t_id:record.data.teacher_id
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
	} 
});