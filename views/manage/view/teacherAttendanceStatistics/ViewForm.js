Ext.define('manage.view.teacherAttendanceStatistics.ViewForm', {
	requires : ['manage.view.teacherAttendanceStatistics.TeacherAttendanceStatisticsGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.teacherAttendanceStatisticsviewform',
	width: 1200,
    height: 500,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'ssd_id'},{xtype:'teacherAttendanceStatisticsdetailgrid'},{xtype : 'hidden',name : 't_id'},{xtype : 'hidden',name : 'worktime'},{xtype : 'hidden',name : 'address'}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});
