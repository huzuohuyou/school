Ext.define('manage.view.wx_courses.CoursesReadingViewForm', {
	requires : ['manage.view.wx_courses.CoursesReadingGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.coursesreadingviewform',
	width: 900,
    height: 600,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'id'},{xtype:'coursesreadinggrid'}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});