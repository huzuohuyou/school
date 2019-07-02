Ext.define('manage.view.classSchedules.ViewForm', {
	requires : ['manage.view.classSchedules.CoursesGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.classSchedulesviewform',
	width: 1200,
    height: 600,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'pre_courses_id'},{xtype : 'hidden',name : 'school_name'},{xtype:'detail_classgrid'}],
	buttons : [ {
		text : '确定',
		action : 'submit'
	}, {
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});
