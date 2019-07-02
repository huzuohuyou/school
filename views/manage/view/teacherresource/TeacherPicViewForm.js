Ext.define('manage.view.teacherresource.TeacherPicViewForm', {
	requires : ['manage.view.teacherresource.TeacherPicGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.teacherpicviewform',
	width: 1000,
    height: 600,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'teacher_id'},{xtype : 'hidden',name : 't_name'},{xtype:'teacherpicgrid'},{xtype : 'hidden',name : 'ssd_id'}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});
