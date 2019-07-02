Ext.define('manage.view.teacher.TeachercourseForm', {
	requires : ['manage.view.teacher.TeachercourseGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.teachercourseform',
	width:800,
    height: 500,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 't_id'},{xtype:'teachercoursegrid'}],
	buttons : [{
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});