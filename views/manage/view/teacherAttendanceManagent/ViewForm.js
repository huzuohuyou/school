Ext.define('manage.view.teacherAttendanceManagent.ViewForm', {
	requires : ['manage.view.teacherAttendanceManagent.TeacherAttendanceDetailGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.teacherAttendanceManagentviewform',
	width: 700,
    height: 400,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'ssd_id'},{xtype:'teacherAttendanceDetailgrid'},{xtype : 'hidden',name : 't_id'}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});
