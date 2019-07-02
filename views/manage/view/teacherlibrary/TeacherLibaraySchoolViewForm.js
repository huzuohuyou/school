Ext.define('manage.view.teacherlibrary.TeacherLibaraySchoolViewForm', {
	requires : ['manage.view.teacherlibrary.TeacherSchoolsGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.teacherlibarayschoolviewform',
	width: 1000,
    height: 500,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype:'teacherschoolsgrid'},{xtype : 'hidden',name : 'id'}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});