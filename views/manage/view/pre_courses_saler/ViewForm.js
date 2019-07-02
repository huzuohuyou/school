Ext.define('manage.view.pre_courses_saler.ViewForm', {
	requires : ['manage.view.pre_courses_saler.CoursesGrid'],
	extend : 'Ext.form.Panel',
	alias : 'widget.precourses_salerviewform',
	width: 1000,
    height: 600,
    closeAction : 'hide',
	bodyPadding : 10,
	header : false,
	region : 'center',
	layout : 'border',
	buttonAlign : 'center',
	items : [{xtype : 'hidden',name : 'pre_courses_id'} ,{xtype:'detail_courses_salergrid'}],
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
